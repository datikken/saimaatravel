var
  app = app || {};

app.breakpoints = {
  tablet: 768,
  medium: 992,
  large: 1120
};

(function() {
  'use strict';

  var
    resizeTimeout = 0,
    _heightResize = 0,
    _widthResize = 0,
    _init = false;
  var
    $window;

  /**
   *
   * @type {{windowWidth: number, windowHeight: number, breakpointState: number, trueResize: boolean}}
   */
  app.vars = {
    windowWidth: 0,
    windowHeight: 0,
    breakpointState: 1,
    trueResize: false,
    heightResize: false,
    homeUrl: '/',
    authorized: false,
    ios: false
  };

  app.EVENTS = {
    INIT_COMPLETE: 'init-complete'
  };

  app.classes = {
    no_transition: 'transition-instant'
  };
  /**
   *
   * @type {{body: string, header: string, main: string, footer: string}}
   */
  app.selectors = {
    body: 'body',
    navbar: '.navbar',
    header: '.header',
    main: '.main',
    map: '.map-wrap',
    lead: '.cta',
    footer: '.footer'
  };
  /**
   * @type {{body: jQuery, header: jQuery, main: jQuery, footer: jQuery}}
   *
   */
  app.elements = {};
  app.tree_data = '';
  app.modules = [];

  app.init = function() {

    if (!_init) {

      _init = true;
      $window = $(window);
      this.vars.langGuid = $(this.selectors.body).data('langGuid');
      this.vars.authorized = $(this.selectors.body).hasClass('authorized');
      this.vars.windowWidth = $window.outerWidth();

      if (this.vars.windowWidth >= app.breakpoints.tablet) {
        this.vars.breakpointState = 2;
      }
      if (this.vars.windowWidth >= app.breakpoints.medium) {
        this.vars.breakpointState = 3;
      }
      if (this.vars.windowWidth >= app.breakpoints.large) {
        this.vars.breakpointState = 4;
      }
      if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
        this.vars.ios = true;
      }
      this.modulesInit();
      this.listener();
      this.resize();
      this._loadState();
    }
  };
  app.modulesInit = function() {
    for (var module in app) {
      if (app.hasOwnProperty(module)) {
        if ((_.isObject(app[module]) || _.isFunction(app[module])) && _.isFunction(app[module].init)) {
          this.modules.push(app[module]);
        }
      }
    }
    this.modules = _.sortBy(this.modules, function(module) {
      return module.moduleOrder;
    });
    _.each(this.modules, function(module) {
      module.init();
    });
  };

  app.listener = function() {
    var
      $body = $('body'),
      namespace = 'lenmgt_main';

    $window.resize(this._handleResize.bind(this));
    $body.on('submit', '.ajax-form', namespace, this.formSubmit.bind(this));
    $body.on('submit', 'form', namespace, this.formStaticSubmit.bind(this));
  };

  app.formParse = function($el) {
    var
      formData = {},
      form_data = $el.serializeArray();

    _.each(form_data, function(item) {
      if (item.name.indexOf('phone') !== -1 && item.value.indexOf('+') == 0) {
        item.value = item.value.replace(/\s/g, '');
      }
      formData[item.name] = item.value;
    });
    return formData;
  };

  app.formStaticSubmit = function(e) {
    var
      $form = $(e.currentTarget);
    var
      state;

    if ($form.hasClass('handled')) {
      return;
    }
    if (!$form.hasClass('ajax-form') && !$form.data('valid')) {
      e.preventDefault();
      state =  app.validator.formValidate([], $form);
      $form.data('valid', state);
      if (state && !$form.hasClass('prevalidate')) {
        app.prevalidateForm(e);
      }
    }
  };
  app.elementsParse = function (selectors, parent) {
    var
      _parent = $(parent).length ? $(parent) : $('body'),
      _result = {};
    _.each(selectors, function (val, key) {
      var
        $item = _parent.find(val);
      if ($item.length) {
        _result[key] = $item;
      } else if(_parent.is(val)) {
        _result[key] = _parent;
      } else {
        _result[key] = $item;
      }
    });
    return _result;
  };
  app.formSubmit = function(e) {
    var
      form = $(e.currentTarget);

    e.preventDefault();
    if (form.hasClass('handled')) {
      return;
    }
    if (form.hasClass('prevalidate')) {
      form.ajaxSubmit({
        beforeSubmit: function(arr, $form, options) {
          var
            state =  app.validator.formValidate(arr, $form);
          $form.toggleClass('preload', state);
          return state;
        },
        success: function(response, statusText, xhr, form) {
          if (response) {
            $(form).parent().html(response);
            $(form).parent().addClass('form-success');
          } else {
            $(form).parent().addClass('form-error');
          }
        },
        error: function() {
          $(form).parent().addClass('form-error');
        }
      });
    } else {
      this.prevalidateForm(e);
    }
  };

  app.prevalidateForm = function(e) {
    var
      $form = $(e.currentTarget);

    e.preventDefault();
    e.stopPropagation();

    if (!$form.find('.validate_action')) {
      $form.addClass('prevalidate');
      $form.submit();
      return true;
    }

    $form.ajaxSubmit({
      success: function(data, status, def, $form) {
        var
          hash = def.getResponseHeader('validationHash');

        if (hash) {
          $form.append('<input type="hidden" value="' + hash + '" name="validationHash" />');
        }
        $form.find('.validate_action').remove();
        $form.addClass('prevalidate');
        $form.submit();
      }
    });
  };

  app._handleResize = function() {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }
    resizeTimeout = setTimeout(function() {
      app.resize();
    }.bind(this), 100);
  };

  app.resize = function() {
    this.vars.windowWidth = $window.outerWidth();
    this.vars.windowHeight = $window.outerHeight();

    if (app.vars.windowHeight - _heightResize >= 100 || app.vars.windowHeight - _heightResize <= -100|| _widthResize !== app.vars.windowWidth) {
        app.vars.trueResize = true;
    }
    if (_widthResize === app.vars.windowWidth && _heightResize !== app.vars.windowHeight) {
      app.vars.heightResize = true;
    }
    _heightResize = app.vars.windowHeight;
    _widthResize = app.vars.windowWidth;

    this.vars.breakpointState = 1;
    if (this.vars.windowWidth >= app.breakpoints.tablet) {
      this.vars.breakpointState = 2;
    }
    if (this.vars.windowWidth >= app.breakpoints.medium) {
      this.vars.breakpointState = 3;
    }
    if (this.vars.windowWidth >= app.breakpoints.large) {
      this.vars.breakpointState = 4;
    }

    for(var module in app) {
      if (app.hasOwnProperty(module)) {
        if ((_.isObject(app[module]) || _.isFunction(app[module])) && _.isFunction(app[module].resize)) {
          app[module].resize();
        }
      }
    }
    app.vars.trueResize = false;
    app.vars.heightResize = false;
  };

  /**
   * Получаем данные по api или из кэша если прошло не более 15 минут
   * @param key {String} - ключ для хранения данных
   * @param api
   * @param successCallback
   */
  app.getItemsByAPI = function(key, api, successCallback) {
    var
      hasStorage = ('sessionStorage' in window && window.sessionStorage),
      storageKey = key,
      now, expiration, data = false;

    try {
      if (hasStorage) {
        data = sessionStorage.getItem(storageKey);
        if (data) {
          data = JSON.parse(data);

          now = new Date();
          expiration = new Date(data.timestamp);
          expiration.setMinutes(expiration.getMinutes() + 15);

          // Сбрасываем данные если прошло более 15 минут
            if (now.getTime() > expiration.getTime()) {
              data = false;
              sessionStorage.removeItem(storageKey);
            }
        }
      }
    }
    catch (e) {
      data = false;
    }

    if (data) {
      // используем данные из session storage
        if (successCallback && _.isFunction(successCallback)) {
          successCallback(data.content);
        }
    } else {
      $.ajax({
        type : 'GET',
        url : '/',
        data : { api: api },
        success : function(content, status, xhr) {
          if (content.status === 'error') {
            console.error('При выполнении API запроса к ' + api + ' произошла ошибка', content);
            return;
          }

          if (hasStorage) {
            try {
              sessionStorage.setItem(storageKey, JSON.stringify({
                timestamp: new Date(),
                content: content
              }));
            } catch (e) {
            }
          }

          if (successCallback) {
            successCallback(content);
          }
        },
        error: function(data) {
          console.error('При выполнении API запроса к ' + api + ' произошла ошибка', data);
        }
      });
    }
  };

  app.convertDateForHumans = function(timestamp, offset) {
    var
      _date = new Date();
    var
      minutes,
      time,
      date;

    if (!offset) {
      offset = 1;
    }

    _date.setTime(timestamp * 1000 * offset);

    minutes = _date.getMinutes();
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    time = _date.getHours() + ':' + minutes;

    date = {
      year: _date.getYear() + 1900,
      month: _date.getMonth(),
      days: _date.getDate(),
      time: time
    };

    return date;
  };
  /**
   *
   * @returns {boolean}
   */
  app.isMobile = function() {
    return this.vars.breakpointState === 1;
  };

  /**
   * Конструктор модулей в которых предусмотрено наличие нескольких независимых друг от друга 'контейнеров'
   *
   * @param ModuleFactory - конструктор в котором содержится основная логика модуля
   * @constructor
   */
  app.Module = function(ModuleFactory) {
    this._init = false;
    this._instances = [];
    this._container_selector = ModuleFactory.prototype._selectors.container;
    this.ModuleFactory = ModuleFactory;
  };

  app.Module.prototype = {
    init: function($content_containers) {
      if (!$content_containers) {
        $content_containers = $(this._container_selector);
      }

      if ($content_containers.length) {
        this._init = true;
        $content_containers.each(function(i, item) {
          var
          instance = new this.ModuleFactory($(item));
          this._instances.push(instance);
        }.bind(this));
      }
    },

    resize: function() {
      if(this._init) {
        _.each(this._instances, function(item) {
          item.resize();
        });
      }
    }
  };
  /**
   *
   * Выставляем флаг загрузки приложения
   * @private
   */
  app._loadState = function() {
    $('body').trigger(app.EVENTS.INIT_COMPLETE);
    $('body').addClass('app-load');
  };
})();

$(document).ready(function() {
  app.init();
});