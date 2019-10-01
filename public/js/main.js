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
(function() {
    'use strict';
    app.carousel = {
      /**
       * селекторы модуля
       */
      _selectors: {
        container: '.owl-carousel'
      },
      /**
       * _init - флаг инициализации модуля
       */
      _init: false,
      /**
       * Функция инициализации модуля
       */
      init: function() {
        var
          $container = $(this._selectors.container);
  
        if ($container.length) {
          this._init = true;
          this._listener();
        }
      },
      /**
       * Постановка обработчиков событий
       * @private
       */
      _listener: function() {
        $(document).ready(this._init_gallery.bind(this));
      },
      /**
       * Поддержка свайпа
       * @param {Event} e
       * @private
       */
      _handleSwipe: function(e) {
        var
          direction;
        if (e.gesture && e.gesture.direction) {
          if (e.gesture.direction === 2) {
            $('#dg-container').find('.dg-next').click();
          }
          if (e.gesture.direction === 4) {
            $('#dg-container').find('.dg-prev').click();
          }
        }
        if (!direction) {
          return;
        } 
        // console.log(e.gesture.direction)
      },
      _init_gallery: function() {  
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 0,
          dots: false,
          nav: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
              margin: 40,
              stagePadding: 0,
              singleItem:true
            },
            600: {
              items: 2,
              margin: 40,
              stagePadding: 50,
            },
            1000: {
              items: 3,
              margin: 40,
              stagePadding: 0
            }
          }
        });
      },
      /**
       * Отрабатываем ресайз браузера
       */
      resize: function() {
        if (this._init && app.vars.trueResize) {
        }
      }
    };
  })();
  
(function() {
    'use strict';
    app.navbar = {
      /**
       * селекторы модуля
       */
      _selectors: {
        container: '.navbar'
      },
      /**
       * _init - флаг инициализации модуля
       */
      _init: false,
      /**
       * Функция инициализации модуля
       */
      init: function() {
        var
          $container = $(this._selectors.container);
  
        if ($container.length) {
          this._init = true;
          this._listener();
        }
      },
      /**
       * Постановка обработчиков событий
       * @private
       */
      _listener: function() {
        $(document).ready(this._rotate.bind(this));
        $('#menu__toggle').on('click', this._dropMenu.bind(this));
      },
      _dropMenu: function() {
        $('.dropdown__overlay').toggleClass('show__menu');
        $('.dropdown__overlay').toggleClass('hide__menu');

        var site = $('.site')[0];

        if($(site).hasClass('blocked')) {
          this._allowScroll();
        } else {
          this._blockScroll();
        }
      },
      _blockScroll: function() {
          scrollLock.disablePageScroll();
          $('.site').addClass('blocked')
      },
      _allowScroll: function() {
        scrollLock.enablePageScroll();
        $('.site').addClass('enabled');
        $('.site').removeClass('blocked')
      },
      _rotate: function() {  
        $('.dropdown-toggle').on('click', function(event) {
            $('.arrow').toggleClass('rotate');
            $('.arrow').toggleClass('rotate2');

            $('.dropdown-menu').toggleClass('hidden');
            $('.dropdown-menu').toggleClass('shown');
          })
      },
      /**
       * Отрабатываем ресайз браузера
       */
      resize: function() {
        if (this._init && app.vars.trueResize) {
        }
      }
    };
  })();
(function() {
    'use strict';
    app.lead = {
      /**
       * селекторы модуля
       */
      _selectors: {
        container: '.cta'
      },
      /**
       * _init - флаг инициализации модуля
       */
      _init: false,
      /**
       * Функция инициализации модуля
       */
      init: function() {
        var
          $container = $(this._selectors.container);
  
        if ($container.length) {
          this._init = true;
          this._listener();
        }
      },
      /**
       * Постановка обработчиков событий
       * @private
       */
      _listener: function() {
          $('.cta').on('click', this._showForm.bind(this));
          $('.cta').on('touchmove', this._showForm.bind(this));
          $('.close').on('click', this._hideForm.bind(this));
      },
      _showForm: function() {
        var el = $('#test-popup');

          $('.cta').magnificPopup({
            items: {
              src: el
            },
            type:'inline',
            midClick: true 
          });
      },
      _hideForm: function() {
        $.magnificPopup.close();
        scrollLock.enablePageScroll();
      },
      /**
       * Отрабатываем ресайз браузера
       */
      resize: function() {
        if (this._init && app.vars.trueResize) {
        }
      }
    };
  })();

(function() {
    'use strict';
    app.map = {
      /**
       * селекторы модуля
       */
      _selectors: {
        container: '.map',
      },
      /**
       * _init - флаг инициализации модуля
       */
      _init: false,
      /**
       * Функция инициализации модуля
       */
      init: function() {
        var
          $container = $(this._selectors.container);
  
        if ($container.length) {
          this._init = true;
          this._listener();
        }
      },
      /**
       * Постановка обработчиков событий
       * @private
       */
      _listener: function() {
          $(document).ready(this._simpleMap.bind(this));
      },
      _simpleMap: function() {  

          //   var map = new google.maps.Map(
          //     el, {zoom: 4, center: {lat: parseInt(el.dataset.lat,10), lng: parseInt(el.dataset.lng,10)}});
          // // The marker, positioned at Uluru
          // var marker = new google.maps.Marker({position: {lat: parseInt(el.dataset.lat,10), lng: parseInt(el.dataset.lng,10)}, map: map});

          
        ymaps.ready(ymaps_init);
        function ymaps_init () {
          var myMap;
          var maps = $('.map');
          
          console.log(maps);

          $(maps).each(function(i, el) {
            var yProjects = [];

            myMap = new ymaps.Map(el, {
              center: [55.76, 37.64],
              zoom: 17,
              type: "yandex#map",
              behaviors: ["default", "scrollZoom"]
            });

            myMap.balloon.open(
                [el.dataset.lat, el.dataset.lng],
                  {
                    contentHeader: el.dataset.desc,
                    contentBody: "",
                    contentFooter: el.dataset.adress,
                  },
                  {
                    closeButton: false
                  }
              );
            
            var placeMark = new ymaps.Placemark([el.dataset.lat,el.dataset.lng], { 
                    balloonCloseButton: true,
                    hideIconOnBalloonOpen: true
                },{
                    preset: "islands#circleDotIcon",
                    iconColor :'#333'
                })

            myMap.geoObjects.add(placeMark);
          })
        }
      },
      /**
       * Отрабатываем ресайз браузера
       */
      resize: function() {
        if (this._init && app.vars.trueResize) {
        }
      }
    };
  })();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5qcyIsIm1haW4vbW9kdWxlcy9jYXJvdXNlbC5qcyIsIm1haW4vbW9kdWxlcy9oZWFkZXIuanMiLCJtYWluL21vZHVsZXMvbGVhZC5qcyIsIm1haW4vbW9kdWxlcy9tYXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXJcbiAgYXBwID0gYXBwIHx8IHt9O1xuXG5hcHAuYnJlYWtwb2ludHMgPSB7XG4gIHRhYmxldDogNzY4LFxuICBtZWRpdW06IDk5MixcbiAgbGFyZ2U6IDExMjBcbn07XG5cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhclxuICAgIHJlc2l6ZVRpbWVvdXQgPSAwLFxuICAgIF9oZWlnaHRSZXNpemUgPSAwLFxuICAgIF93aWR0aFJlc2l6ZSA9IDAsXG4gICAgX2luaXQgPSBmYWxzZTtcbiAgdmFyXG4gICAgJHdpbmRvdztcblxuICAvKipcbiAgICpcbiAgICogQHR5cGUge3t3aW5kb3dXaWR0aDogbnVtYmVyLCB3aW5kb3dIZWlnaHQ6IG51bWJlciwgYnJlYWtwb2ludFN0YXRlOiBudW1iZXIsIHRydWVSZXNpemU6IGJvb2xlYW59fVxuICAgKi9cbiAgYXBwLnZhcnMgPSB7XG4gICAgd2luZG93V2lkdGg6IDAsXG4gICAgd2luZG93SGVpZ2h0OiAwLFxuICAgIGJyZWFrcG9pbnRTdGF0ZTogMSxcbiAgICB0cnVlUmVzaXplOiBmYWxzZSxcbiAgICBoZWlnaHRSZXNpemU6IGZhbHNlLFxuICAgIGhvbWVVcmw6ICcvJyxcbiAgICBhdXRob3JpemVkOiBmYWxzZSxcbiAgICBpb3M6IGZhbHNlXG4gIH07XG5cbiAgYXBwLkVWRU5UUyA9IHtcbiAgICBJTklUX0NPTVBMRVRFOiAnaW5pdC1jb21wbGV0ZSdcbiAgfTtcblxuICBhcHAuY2xhc3NlcyA9IHtcbiAgICBub190cmFuc2l0aW9uOiAndHJhbnNpdGlvbi1pbnN0YW50J1xuICB9O1xuICAvKipcbiAgICpcbiAgICogQHR5cGUge3tib2R5OiBzdHJpbmcsIGhlYWRlcjogc3RyaW5nLCBtYWluOiBzdHJpbmcsIGZvb3Rlcjogc3RyaW5nfX1cbiAgICovXG4gIGFwcC5zZWxlY3RvcnMgPSB7XG4gICAgYm9keTogJ2JvZHknLFxuICAgIG5hdmJhcjogJy5uYXZiYXInLFxuICAgIGhlYWRlcjogJy5oZWFkZXInLFxuICAgIG1haW46ICcubWFpbicsXG4gICAgbWFwOiAnLm1hcC13cmFwJyxcbiAgICBsZWFkOiAnLmN0YScsXG4gICAgZm9vdGVyOiAnLmZvb3RlcidcbiAgfTtcbiAgLyoqXG4gICAqIEB0eXBlIHt7Ym9keTogalF1ZXJ5LCBoZWFkZXI6IGpRdWVyeSwgbWFpbjogalF1ZXJ5LCBmb290ZXI6IGpRdWVyeX19XG4gICAqXG4gICAqL1xuICBhcHAuZWxlbWVudHMgPSB7fTtcbiAgYXBwLnRyZWVfZGF0YSA9ICcnO1xuICBhcHAubW9kdWxlcyA9IFtdO1xuXG4gIGFwcC5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoIV9pbml0KSB7XG5cbiAgICAgIF9pbml0ID0gdHJ1ZTtcbiAgICAgICR3aW5kb3cgPSAkKHdpbmRvdyk7XG4gICAgICB0aGlzLnZhcnMubGFuZ0d1aWQgPSAkKHRoaXMuc2VsZWN0b3JzLmJvZHkpLmRhdGEoJ2xhbmdHdWlkJyk7XG4gICAgICB0aGlzLnZhcnMuYXV0aG9yaXplZCA9ICQodGhpcy5zZWxlY3RvcnMuYm9keSkuaGFzQ2xhc3MoJ2F1dGhvcml6ZWQnKTtcbiAgICAgIHRoaXMudmFycy53aW5kb3dXaWR0aCA9ICR3aW5kb3cub3V0ZXJXaWR0aCgpO1xuXG4gICAgICBpZiAodGhpcy52YXJzLndpbmRvd1dpZHRoID49IGFwcC5icmVha3BvaW50cy50YWJsZXQpIHtcbiAgICAgICAgdGhpcy52YXJzLmJyZWFrcG9pbnRTdGF0ZSA9IDI7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YXJzLndpbmRvd1dpZHRoID49IGFwcC5icmVha3BvaW50cy5tZWRpdW0pIHtcbiAgICAgICAgdGhpcy52YXJzLmJyZWFrcG9pbnRTdGF0ZSA9IDM7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy52YXJzLndpbmRvd1dpZHRoID49IGFwcC5icmVha3BvaW50cy5sYXJnZSkge1xuICAgICAgICB0aGlzLnZhcnMuYnJlYWtwb2ludFN0YXRlID0gNDtcbiAgICAgIH1cbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oaVBvZHxpUGhvbmV8aVBhZCkvKSkge1xuICAgICAgICB0aGlzLnZhcnMuaW9zID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubW9kdWxlc0luaXQoKTtcbiAgICAgIHRoaXMubGlzdGVuZXIoKTtcbiAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgICB0aGlzLl9sb2FkU3RhdGUoKTtcbiAgICB9XG4gIH07XG4gIGFwcC5tb2R1bGVzSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIG1vZHVsZSBpbiBhcHApIHtcbiAgICAgIGlmIChhcHAuaGFzT3duUHJvcGVydHkobW9kdWxlKSkge1xuICAgICAgICBpZiAoKF8uaXNPYmplY3QoYXBwW21vZHVsZV0pIHx8IF8uaXNGdW5jdGlvbihhcHBbbW9kdWxlXSkpICYmIF8uaXNGdW5jdGlvbihhcHBbbW9kdWxlXS5pbml0KSkge1xuICAgICAgICAgIHRoaXMubW9kdWxlcy5wdXNoKGFwcFttb2R1bGVdKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm1vZHVsZXMgPSBfLnNvcnRCeSh0aGlzLm1vZHVsZXMsIGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgcmV0dXJuIG1vZHVsZS5tb2R1bGVPcmRlcjtcbiAgICB9KTtcbiAgICBfLmVhY2godGhpcy5tb2R1bGVzLCBmdW5jdGlvbihtb2R1bGUpIHtcbiAgICAgIG1vZHVsZS5pbml0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgYXBwLmxpc3RlbmVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyXG4gICAgICAkYm9keSA9ICQoJ2JvZHknKSxcbiAgICAgIG5hbWVzcGFjZSA9ICdsZW5tZ3RfbWFpbic7XG5cbiAgICAkd2luZG93LnJlc2l6ZSh0aGlzLl9oYW5kbGVSZXNpemUuYmluZCh0aGlzKSk7XG4gICAgJGJvZHkub24oJ3N1Ym1pdCcsICcuYWpheC1mb3JtJywgbmFtZXNwYWNlLCB0aGlzLmZvcm1TdWJtaXQuYmluZCh0aGlzKSk7XG4gICAgJGJvZHkub24oJ3N1Ym1pdCcsICdmb3JtJywgbmFtZXNwYWNlLCB0aGlzLmZvcm1TdGF0aWNTdWJtaXQuYmluZCh0aGlzKSk7XG4gIH07XG5cbiAgYXBwLmZvcm1QYXJzZSA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHZhclxuICAgICAgZm9ybURhdGEgPSB7fSxcbiAgICAgIGZvcm1fZGF0YSA9ICRlbC5zZXJpYWxpemVBcnJheSgpO1xuXG4gICAgXy5lYWNoKGZvcm1fZGF0YSwgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaWYgKGl0ZW0ubmFtZS5pbmRleE9mKCdwaG9uZScpICE9PSAtMSAmJiBpdGVtLnZhbHVlLmluZGV4T2YoJysnKSA9PSAwKSB7XG4gICAgICAgIGl0ZW0udmFsdWUgPSBpdGVtLnZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICB9XG4gICAgICBmb3JtRGF0YVtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybURhdGE7XG4gIH07XG5cbiAgYXBwLmZvcm1TdGF0aWNTdWJtaXQgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyXG4gICAgICAkZm9ybSA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB2YXJcbiAgICAgIHN0YXRlO1xuXG4gICAgaWYgKCRmb3JtLmhhc0NsYXNzKCdoYW5kbGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCEkZm9ybS5oYXNDbGFzcygnYWpheC1mb3JtJykgJiYgISRmb3JtLmRhdGEoJ3ZhbGlkJykpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHN0YXRlID0gIGFwcC52YWxpZGF0b3IuZm9ybVZhbGlkYXRlKFtdLCAkZm9ybSk7XG4gICAgICAkZm9ybS5kYXRhKCd2YWxpZCcsIHN0YXRlKTtcbiAgICAgIGlmIChzdGF0ZSAmJiAhJGZvcm0uaGFzQ2xhc3MoJ3ByZXZhbGlkYXRlJykpIHtcbiAgICAgICAgYXBwLnByZXZhbGlkYXRlRm9ybShlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGFwcC5lbGVtZW50c1BhcnNlID0gZnVuY3Rpb24gKHNlbGVjdG9ycywgcGFyZW50KSB7XG4gICAgdmFyXG4gICAgICBfcGFyZW50ID0gJChwYXJlbnQpLmxlbmd0aCA/ICQocGFyZW50KSA6ICQoJ2JvZHknKSxcbiAgICAgIF9yZXN1bHQgPSB7fTtcbiAgICBfLmVhY2goc2VsZWN0b3JzLCBmdW5jdGlvbiAodmFsLCBrZXkpIHtcbiAgICAgIHZhclxuICAgICAgICAkaXRlbSA9IF9wYXJlbnQuZmluZCh2YWwpO1xuICAgICAgaWYgKCRpdGVtLmxlbmd0aCkge1xuICAgICAgICBfcmVzdWx0W2tleV0gPSAkaXRlbTtcbiAgICAgIH0gZWxzZSBpZihfcGFyZW50LmlzKHZhbCkpIHtcbiAgICAgICAgX3Jlc3VsdFtrZXldID0gX3BhcmVudDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9yZXN1bHRba2V5XSA9ICRpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfcmVzdWx0O1xuICB9O1xuICBhcHAuZm9ybVN1Ym1pdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXJcbiAgICAgIGZvcm0gPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGZvcm0uaGFzQ2xhc3MoJ2hhbmRsZWQnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZm9ybS5oYXNDbGFzcygncHJldmFsaWRhdGUnKSkge1xuICAgICAgZm9ybS5hamF4U3VibWl0KHtcbiAgICAgICAgYmVmb3JlU3VibWl0OiBmdW5jdGlvbihhcnIsICRmb3JtLCBvcHRpb25zKSB7XG4gICAgICAgICAgdmFyXG4gICAgICAgICAgICBzdGF0ZSA9ICBhcHAudmFsaWRhdG9yLmZvcm1WYWxpZGF0ZShhcnIsICRmb3JtKTtcbiAgICAgICAgICAkZm9ybS50b2dnbGVDbGFzcygncHJlbG9hZCcsIHN0YXRlKTtcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXNUZXh0LCB4aHIsIGZvcm0pIHtcbiAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICQoZm9ybSkucGFyZW50KCkuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAkKGZvcm0pLnBhcmVudCgpLmFkZENsYXNzKCdmb3JtLXN1Y2Nlc3MnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChmb3JtKS5wYXJlbnQoKS5hZGRDbGFzcygnZm9ybS1lcnJvcicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoZm9ybSkucGFyZW50KCkuYWRkQ2xhc3MoJ2Zvcm0tZXJyb3InKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJldmFsaWRhdGVGb3JtKGUpO1xuICAgIH1cbiAgfTtcblxuICBhcHAucHJldmFsaWRhdGVGb3JtID0gZnVuY3Rpb24oZSkge1xuICAgIHZhclxuICAgICAgJGZvcm0gPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICghJGZvcm0uZmluZCgnLnZhbGlkYXRlX2FjdGlvbicpKSB7XG4gICAgICAkZm9ybS5hZGRDbGFzcygncHJldmFsaWRhdGUnKTtcbiAgICAgICRmb3JtLnN1Ym1pdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgJGZvcm0uYWpheFN1Ym1pdCh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGRlZiwgJGZvcm0pIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgaGFzaCA9IGRlZi5nZXRSZXNwb25zZUhlYWRlcigndmFsaWRhdGlvbkhhc2gnKTtcblxuICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICRmb3JtLmFwcGVuZCgnPGlucHV0IHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIicgKyBoYXNoICsgJ1wiIG5hbWU9XCJ2YWxpZGF0aW9uSGFzaFwiIC8+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgJGZvcm0uZmluZCgnLnZhbGlkYXRlX2FjdGlvbicpLnJlbW92ZSgpO1xuICAgICAgICAkZm9ybS5hZGRDbGFzcygncHJldmFsaWRhdGUnKTtcbiAgICAgICAgJGZvcm0uc3VibWl0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgYXBwLl9oYW5kbGVSZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAocmVzaXplVGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHJlc2l6ZVRpbWVvdXQpO1xuICAgIH1cbiAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIGFwcC5yZXNpemUoKTtcbiAgICB9LmJpbmQodGhpcyksIDEwMCk7XG4gIH07XG5cbiAgYXBwLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudmFycy53aW5kb3dXaWR0aCA9ICR3aW5kb3cub3V0ZXJXaWR0aCgpO1xuICAgIHRoaXMudmFycy53aW5kb3dIZWlnaHQgPSAkd2luZG93Lm91dGVySGVpZ2h0KCk7XG5cbiAgICBpZiAoYXBwLnZhcnMud2luZG93SGVpZ2h0IC0gX2hlaWdodFJlc2l6ZSA+PSAxMDAgfHwgYXBwLnZhcnMud2luZG93SGVpZ2h0IC0gX2hlaWdodFJlc2l6ZSA8PSAtMTAwfHwgX3dpZHRoUmVzaXplICE9PSBhcHAudmFycy53aW5kb3dXaWR0aCkge1xuICAgICAgICBhcHAudmFycy50cnVlUmVzaXplID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKF93aWR0aFJlc2l6ZSA9PT0gYXBwLnZhcnMud2luZG93V2lkdGggJiYgX2hlaWdodFJlc2l6ZSAhPT0gYXBwLnZhcnMud2luZG93SGVpZ2h0KSB7XG4gICAgICBhcHAudmFycy5oZWlnaHRSZXNpemUgPSB0cnVlO1xuICAgIH1cbiAgICBfaGVpZ2h0UmVzaXplID0gYXBwLnZhcnMud2luZG93SGVpZ2h0O1xuICAgIF93aWR0aFJlc2l6ZSA9IGFwcC52YXJzLndpbmRvd1dpZHRoO1xuXG4gICAgdGhpcy52YXJzLmJyZWFrcG9pbnRTdGF0ZSA9IDE7XG4gICAgaWYgKHRoaXMudmFycy53aW5kb3dXaWR0aCA+PSBhcHAuYnJlYWtwb2ludHMudGFibGV0KSB7XG4gICAgICB0aGlzLnZhcnMuYnJlYWtwb2ludFN0YXRlID0gMjtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFycy53aW5kb3dXaWR0aCA+PSBhcHAuYnJlYWtwb2ludHMubWVkaXVtKSB7XG4gICAgICB0aGlzLnZhcnMuYnJlYWtwb2ludFN0YXRlID0gMztcbiAgICB9XG4gICAgaWYgKHRoaXMudmFycy53aW5kb3dXaWR0aCA+PSBhcHAuYnJlYWtwb2ludHMubGFyZ2UpIHtcbiAgICAgIHRoaXMudmFycy5icmVha3BvaW50U3RhdGUgPSA0O1xuICAgIH1cblxuICAgIGZvcih2YXIgbW9kdWxlIGluIGFwcCkge1xuICAgICAgaWYgKGFwcC5oYXNPd25Qcm9wZXJ0eShtb2R1bGUpKSB7XG4gICAgICAgIGlmICgoXy5pc09iamVjdChhcHBbbW9kdWxlXSkgfHwgXy5pc0Z1bmN0aW9uKGFwcFttb2R1bGVdKSkgJiYgXy5pc0Z1bmN0aW9uKGFwcFttb2R1bGVdLnJlc2l6ZSkpIHtcbiAgICAgICAgICBhcHBbbW9kdWxlXS5yZXNpemUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBhcHAudmFycy50cnVlUmVzaXplID0gZmFsc2U7XG4gICAgYXBwLnZhcnMuaGVpZ2h0UmVzaXplID0gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqINCf0L7Qu9GD0YfQsNC10Lwg0LTQsNC90L3Ri9C1INC/0L4gYXBpINC40LvQuCDQuNC3INC60Y3RiNCwINC10YHQu9C4INC/0YDQvtGI0LvQviDQvdC1INCx0L7Qu9C10LUgMTUg0LzQuNC90YPRglxuICAgKiBAcGFyYW0ga2V5IHtTdHJpbmd9IC0g0LrQu9GO0Ycg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LTQsNC90L3Ri9GFXG4gICAqIEBwYXJhbSBhcGlcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFja1xuICAgKi9cbiAgYXBwLmdldEl0ZW1zQnlBUEkgPSBmdW5jdGlvbihrZXksIGFwaSwgc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgdmFyXG4gICAgICBoYXNTdG9yYWdlID0gKCdzZXNzaW9uU3RvcmFnZScgaW4gd2luZG93ICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZSksXG4gICAgICBzdG9yYWdlS2V5ID0ga2V5LFxuICAgICAgbm93LCBleHBpcmF0aW9uLCBkYXRhID0gZmFsc2U7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGhhc1N0b3JhZ2UpIHtcbiAgICAgICAgZGF0YSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oc3RvcmFnZUtleSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgICAgICAgICBub3cgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgIGV4cGlyYXRpb24gPSBuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCk7XG4gICAgICAgICAgZXhwaXJhdGlvbi5zZXRNaW51dGVzKGV4cGlyYXRpb24uZ2V0TWludXRlcygpICsgMTUpO1xuXG4gICAgICAgICAgLy8g0KHQsdGA0LDRgdGL0LLQsNC10Lwg0LTQsNC90L3Ri9C1INC10YHQu9C4INC/0YDQvtGI0LvQviDQsdC+0LvQtdC1IDE1INC80LjQvdGD0YJcbiAgICAgICAgICAgIGlmIChub3cuZ2V0VGltZSgpID4gZXhwaXJhdGlvbi5nZXRUaW1lKCkpIHtcbiAgICAgICAgICAgICAgZGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHN0b3JhZ2VLZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICBkYXRhID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIC8vINC40YHQv9C+0LvRjNC30YPQtdC8INC00LDQvdC90YvQtSDQuNC3IHNlc3Npb24gc3RvcmFnZVxuICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrICYmIF8uaXNGdW5jdGlvbihzdWNjZXNzQ2FsbGJhY2spKSB7XG4gICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGRhdGEuY29udGVudCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgJC5hamF4KHtcbiAgICAgICAgdHlwZSA6ICdHRVQnLFxuICAgICAgICB1cmwgOiAnLycsXG4gICAgICAgIGRhdGEgOiB7IGFwaTogYXBpIH0sXG4gICAgICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbihjb250ZW50LCBzdGF0dXMsIHhocikge1xuICAgICAgICAgIGlmIChjb250ZW50LnN0YXR1cyA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J/RgNC4INCy0YvQv9C+0LvQvdC10L3QuNC4IEFQSSDQt9Cw0L/RgNC+0YHQsCDQuiAnICsgYXBpICsgJyDQv9GA0L7QuNC30L7RiNC70LAg0L7RiNC40LHQutCwJywgY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGhhc1N0b3JhZ2UpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oc3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50XG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3VjY2Vzc0NhbGxiYWNrKSB7XG4gICAgICAgICAgICBzdWNjZXNzQ2FsbGJhY2soY29udGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cf0YDQuCDQstGL0L/QvtC70L3QtdC90LjQuCBBUEkg0LfQsNC/0YDQvtGB0LAg0LogJyArIGFwaSArICcg0L/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCcsIGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgYXBwLmNvbnZlcnREYXRlRm9ySHVtYW5zID0gZnVuY3Rpb24odGltZXN0YW1wLCBvZmZzZXQpIHtcbiAgICB2YXJcbiAgICAgIF9kYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXJcbiAgICAgIG1pbnV0ZXMsXG4gICAgICB0aW1lLFxuICAgICAgZGF0ZTtcblxuICAgIGlmICghb2Zmc2V0KSB7XG4gICAgICBvZmZzZXQgPSAxO1xuICAgIH1cblxuICAgIF9kYXRlLnNldFRpbWUodGltZXN0YW1wICogMTAwMCAqIG9mZnNldCk7XG5cbiAgICBtaW51dGVzID0gX2RhdGUuZ2V0TWludXRlcygpO1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyAoJzAnICsgbWludXRlcykgOiBtaW51dGVzO1xuICAgIHRpbWUgPSBfZGF0ZS5nZXRIb3VycygpICsgJzonICsgbWludXRlcztcblxuICAgIGRhdGUgPSB7XG4gICAgICB5ZWFyOiBfZGF0ZS5nZXRZZWFyKCkgKyAxOTAwLFxuICAgICAgbW9udGg6IF9kYXRlLmdldE1vbnRoKCksXG4gICAgICBkYXlzOiBfZGF0ZS5nZXREYXRlKCksXG4gICAgICB0aW1lOiB0aW1lXG4gICAgfTtcblxuICAgIHJldHVybiBkYXRlO1xuICB9O1xuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBhcHAuaXNNb2JpbGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJzLmJyZWFrcG9pbnRTdGF0ZSA9PT0gMTtcbiAgfTtcblxuICAvKipcbiAgICog0JrQvtC90YHRgtGA0YPQutGC0L7RgCDQvNC+0LTRg9C70LXQuSDQsiDQutC+0YLQvtGA0YvRhSDQv9GA0LXQtNGD0YHQvNC+0YLRgNC10L3QviDQvdCw0LvQuNGH0LjQtSDQvdC10YHQutC+0LvRjNC60LjRhSDQvdC10LfQsNCy0LjRgdC40LzRi9GFINC00YDRg9CzINC+0YIg0LTRgNGD0LPQsCAn0LrQvtC90YLQtdC50L3QtdGA0L7QsidcbiAgICpcbiAgICogQHBhcmFtIE1vZHVsZUZhY3RvcnkgLSDQutC+0L3RgdGC0YDRg9C60YLQvtGAINCyINC60L7RgtC+0YDQvtC8INGB0L7QtNC10YDQttC40YLRgdGPINC+0YHQvdC+0LLQvdCw0Y8g0LvQvtCz0LjQutCwINC80L7QtNGD0LvRj1xuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG4gIGFwcC5Nb2R1bGUgPSBmdW5jdGlvbihNb2R1bGVGYWN0b3J5KSB7XG4gICAgdGhpcy5faW5pdCA9IGZhbHNlO1xuICAgIHRoaXMuX2luc3RhbmNlcyA9IFtdO1xuICAgIHRoaXMuX2NvbnRhaW5lcl9zZWxlY3RvciA9IE1vZHVsZUZhY3RvcnkucHJvdG90eXBlLl9zZWxlY3RvcnMuY29udGFpbmVyO1xuICAgIHRoaXMuTW9kdWxlRmFjdG9yeSA9IE1vZHVsZUZhY3Rvcnk7XG4gIH07XG5cbiAgYXBwLk1vZHVsZS5wcm90b3R5cGUgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24oJGNvbnRlbnRfY29udGFpbmVycykge1xuICAgICAgaWYgKCEkY29udGVudF9jb250YWluZXJzKSB7XG4gICAgICAgICRjb250ZW50X2NvbnRhaW5lcnMgPSAkKHRoaXMuX2NvbnRhaW5lcl9zZWxlY3Rvcik7XG4gICAgICB9XG5cbiAgICAgIGlmICgkY29udGVudF9jb250YWluZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9pbml0ID0gdHJ1ZTtcbiAgICAgICAgJGNvbnRlbnRfY29udGFpbmVycy5lYWNoKGZ1bmN0aW9uKGksIGl0ZW0pIHtcbiAgICAgICAgICB2YXJcbiAgICAgICAgICBpbnN0YW5jZSA9IG5ldyB0aGlzLk1vZHVsZUZhY3RvcnkoJChpdGVtKSk7XG4gICAgICAgICAgdGhpcy5faW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICByZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgaWYodGhpcy5faW5pdCkge1xuICAgICAgICBfLmVhY2godGhpcy5faW5zdGFuY2VzLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgaXRlbS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICAvKipcbiAgICpcbiAgICog0JLRi9GB0YLQsNCy0LvRj9C10Lwg0YTQu9Cw0LMg0LfQsNCz0YDRg9C30LrQuCDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXBwLl9sb2FkU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykudHJpZ2dlcihhcHAuRVZFTlRTLklOSVRfQ09NUExFVEUpO1xuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnYXBwLWxvYWQnKTtcbiAgfTtcbn0pKCk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBhcHAuaW5pdCgpO1xufSk7IiwiKGZ1bmN0aW9uKCkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICBhcHAuY2Fyb3VzZWwgPSB7XG4gICAgICAvKipcbiAgICAgICAqINGB0LXQu9C10LrRgtC+0YDRiyDQvNC+0LTRg9C70Y9cbiAgICAgICAqL1xuICAgICAgX3NlbGVjdG9yczoge1xuICAgICAgICBjb250YWluZXI6ICcub3dsLWNhcm91c2VsJ1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogX2luaXQgLSDRhNC70LDQsyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQvNC+0LTRg9C70Y9cbiAgICAgICAqL1xuICAgICAgX2luaXQ6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQvNC+0LTRg9C70Y9cbiAgICAgICAqL1xuICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhclxuICAgICAgICAgICRjb250YWluZXIgPSAkKHRoaXMuX3NlbGVjdG9ycy5jb250YWluZXIpO1xuICBcbiAgICAgICAgaWYgKCRjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5faW5pdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog0J/QvtGB0YLQsNC90L7QstC60LAg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINGB0L7QsdGL0YLQuNC5XG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeSh0aGlzLl9pbml0X2dhbGxlcnkuYmluZCh0aGlzKSk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDQn9C+0LTQtNC10YDQttC60LAg0YHQstCw0LnQv9CwXG4gICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfaGFuZGxlU3dpcGU6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgZGlyZWN0aW9uO1xuICAgICAgICBpZiAoZS5nZXN0dXJlICYmIGUuZ2VzdHVyZS5kaXJlY3Rpb24pIHtcbiAgICAgICAgICBpZiAoZS5nZXN0dXJlLmRpcmVjdGlvbiA9PT0gMikge1xuICAgICAgICAgICAgJCgnI2RnLWNvbnRhaW5lcicpLmZpbmQoJy5kZy1uZXh0JykuY2xpY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGUuZ2VzdHVyZS5kaXJlY3Rpb24gPT09IDQpIHtcbiAgICAgICAgICAgICQoJyNkZy1jb250YWluZXInKS5maW5kKCcuZGctcHJldicpLmNsaWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlLmdlc3R1cmUuZGlyZWN0aW9uKVxuICAgICAgfSxcbiAgICAgIF9pbml0X2dhbGxlcnk6IGZ1bmN0aW9uKCkgeyAgXG4gICAgICAgICQoJy5vd2wtY2Fyb3VzZWwnKS5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgbmF2OiB0cnVlLFxuICAgICAgICAgIHJlc3BvbnNpdmVDbGFzczogdHJ1ZSxcbiAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgICBtYXJnaW46IDQwLFxuICAgICAgICAgICAgICBzdGFnZVBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIHNpbmdsZUl0ZW06dHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIDYwMDoge1xuICAgICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgICAgbWFyZ2luOiA0MCxcbiAgICAgICAgICAgICAgc3RhZ2VQYWRkaW5nOiA1MCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAxMDAwOiB7XG4gICAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgICBtYXJnaW46IDQwLFxuICAgICAgICAgICAgICBzdGFnZVBhZGRpbmc6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog0J7RgtGA0LDQsdCw0YLRi9Cy0LDQtdC8INGA0LXRgdCw0LnQtyDQsdGA0LDRg9C30LXRgNCwXG4gICAgICAgKi9cbiAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbml0ICYmIGFwcC52YXJzLnRydWVSZXNpemUpIHtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH0pKCk7XG4gICIsIihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgYXBwLm5hdmJhciA9IHtcbiAgICAgIC8qKlxuICAgICAgICog0YHQtdC70LXQutGC0L7RgNGLINC80L7QtNGD0LvRj1xuICAgICAgICovXG4gICAgICBfc2VsZWN0b3JzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogJy5uYXZiYXInXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBfaW5pdCAtINGE0LvQsNCzINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC80L7QtNGD0LvRj1xuICAgICAgICovXG4gICAgICBfaW5pdDogZmFsc2UsXG4gICAgICAvKipcbiAgICAgICAqINCk0YPQvdC60YbQuNGPINC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4INC80L7QtNGD0LvRj1xuICAgICAgICovXG4gICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyXG4gICAgICAgICAgJGNvbnRhaW5lciA9ICQodGhpcy5fc2VsZWN0b3JzLmNvbnRhaW5lcik7XG4gIFxuICAgICAgICBpZiAoJGNvbnRhaW5lci5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLl9pbml0ID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLl9saXN0ZW5lcigpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDQn9C+0YHRgtCw0L3QvtCy0LrQsCDQvtCx0YDQsNCx0L7RgtGH0LjQutC+0LIg0YHQvtCx0YvRgtC40LlcbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIF9saXN0ZW5lcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuX3JvdGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgJCgnI21lbnVfX3RvZ2dsZScpLm9uKCdjbGljaycsIHRoaXMuX2Ryb3BNZW51LmJpbmQodGhpcykpO1xuICAgICAgfSxcbiAgICAgIF9kcm9wTWVudTogZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5kcm9wZG93bl9fb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdzaG93X19tZW51Jyk7XG4gICAgICAgICQoJy5kcm9wZG93bl9fb3ZlcmxheScpLnRvZ2dsZUNsYXNzKCdoaWRlX19tZW51Jyk7XG5cbiAgICAgICAgdmFyIHNpdGUgPSAkKCcuc2l0ZScpWzBdO1xuXG4gICAgICAgIGlmKCQoc2l0ZSkuaGFzQ2xhc3MoJ2Jsb2NrZWQnKSkge1xuICAgICAgICAgIHRoaXMuX2FsbG93U2Nyb2xsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fYmxvY2tTY3JvbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9ibG9ja1Njcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgc2Nyb2xsTG9jay5kaXNhYmxlUGFnZVNjcm9sbCgpO1xuICAgICAgICAgICQoJy5zaXRlJykuYWRkQ2xhc3MoJ2Jsb2NrZWQnKVxuICAgICAgfSxcbiAgICAgIF9hbGxvd1Njcm9sbDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjcm9sbExvY2suZW5hYmxlUGFnZVNjcm9sbCgpO1xuICAgICAgICAkKCcuc2l0ZScpLmFkZENsYXNzKCdlbmFibGVkJyk7XG4gICAgICAgICQoJy5zaXRlJykucmVtb3ZlQ2xhc3MoJ2Jsb2NrZWQnKVxuICAgICAgfSxcbiAgICAgIF9yb3RhdGU6IGZ1bmN0aW9uKCkgeyAgXG4gICAgICAgICQoJy5kcm9wZG93bi10b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgJCgnLmFycm93JykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZScpO1xuICAgICAgICAgICAgJCgnLmFycm93JykudG9nZ2xlQ2xhc3MoJ3JvdGF0ZTInKTtcblxuICAgICAgICAgICAgJCgnLmRyb3Bkb3duLW1lbnUnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgICAgICAkKCcuZHJvcGRvd24tbWVudScpLnRvZ2dsZUNsYXNzKCdzaG93bicpO1xuICAgICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDQntGC0YDQsNCx0LDRgtGL0LLQsNC10Lwg0YDQtdGB0LDQudC3INCx0YDQsNGD0LfQtdGA0LBcbiAgICAgICAqL1xuICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXQgJiYgYXBwLnZhcnMudHJ1ZVJlc2l6ZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIGFwcC5sZWFkID0ge1xuICAgICAgLyoqXG4gICAgICAgKiDRgdC10LvQtdC60YLQvtGA0Ysg0LzQvtC00YPQu9GPXG4gICAgICAgKi9cbiAgICAgIF9zZWxlY3RvcnM6IHtcbiAgICAgICAgY29udGFpbmVyOiAnLmN0YSdcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIF9pbml0IC0g0YTQu9Cw0LMg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LzQvtC00YPQu9GPXG4gICAgICAgKi9cbiAgICAgIF9pbml0OiBmYWxzZSxcbiAgICAgIC8qKlxuICAgICAgICog0KTRg9C90LrRhtC40Y8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Lgg0LzQvtC00YPQu9GPXG4gICAgICAgKi9cbiAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXJcbiAgICAgICAgICAkY29udGFpbmVyID0gJCh0aGlzLl9zZWxlY3RvcnMuY29udGFpbmVyKTtcbiAgXG4gICAgICAgIGlmICgkY29udGFpbmVyLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX2luaXQgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuX2xpc3RlbmVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqINCf0L7RgdGC0LDQvdC+0LLQutCwINC+0LHRgNCw0LHQvtGC0YfQuNC60L7QsiDRgdC+0LHRi9GC0LjQuVxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgX2xpc3RlbmVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcuY3RhJykub24oJ2NsaWNrJywgdGhpcy5fc2hvd0Zvcm0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgJCgnLmN0YScpLm9uKCd0b3VjaG1vdmUnLCB0aGlzLl9zaG93Rm9ybS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAkKCcuY2xvc2UnKS5vbignY2xpY2snLCB0aGlzLl9oaWRlRm9ybS5iaW5kKHRoaXMpKTtcbiAgICAgIH0sXG4gICAgICBfc2hvd0Zvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWwgPSAkKCcjdGVzdC1wb3B1cCcpO1xuXG4gICAgICAgICAgJCgnLmN0YScpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgaXRlbXM6IHtcbiAgICAgICAgICAgICAgc3JjOiBlbFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6J2lubGluZScsXG4gICAgICAgICAgICBtaWRDbGljazogdHJ1ZSBcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBfaGlkZUZvcm06IGZ1bmN0aW9uKCkge1xuICAgICAgICAkLm1hZ25pZmljUG9wdXAuY2xvc2UoKTtcbiAgICAgICAgc2Nyb2xsTG9jay5lbmFibGVQYWdlU2Nyb2xsKCk7XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDQntGC0YDQsNCx0LDRgtGL0LLQsNC10Lwg0YDQtdGB0LDQudC3INCx0YDQsNGD0LfQtdGA0LBcbiAgICAgICAqL1xuICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXQgJiYgYXBwLnZhcnMudHJ1ZVJlc2l6ZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTsiLCJcbihmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgYXBwLm1hcCA9IHtcbiAgICAgIC8qKlxuICAgICAgICog0YHQtdC70LXQutGC0L7RgNGLINC80L7QtNGD0LvRj1xuICAgICAgICovXG4gICAgICBfc2VsZWN0b3JzOiB7XG4gICAgICAgIGNvbnRhaW5lcjogJy5tYXAnLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogX2luaXQgLSDRhNC70LDQsyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQvNC+0LTRg9C70Y9cbiAgICAgICAqL1xuICAgICAgX2luaXQ6IGZhbHNlLFxuICAgICAgLyoqXG4gICAgICAgKiDQpNGD0L3QutGG0LjRjyDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuCDQvNC+0LTRg9C70Y9cbiAgICAgICAqL1xuICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhclxuICAgICAgICAgICRjb250YWluZXIgPSAkKHRoaXMuX3NlbGVjdG9ycy5jb250YWluZXIpO1xuICBcbiAgICAgICAgaWYgKCRjb250YWluZXIubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5faW5pdCA9IHRydWU7XG4gICAgICAgICAgdGhpcy5fbGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICog0J/QvtGB0YLQsNC90L7QstC60LAg0L7QsdGA0LDQsdC+0YLRh9C40LrQvtCyINGB0L7QsdGL0YLQuNC5XG4gICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICovXG4gICAgICBfbGlzdGVuZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KHRoaXMuX3NpbXBsZU1hcC5iaW5kKHRoaXMpKTtcbiAgICAgIH0sXG4gICAgICBfc2ltcGxlTWFwOiBmdW5jdGlvbigpIHsgIFxuXG4gICAgICAgICAgLy8gICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChcbiAgICAgICAgICAvLyAgICAgZWwsIHt6b29tOiA0LCBjZW50ZXI6IHtsYXQ6IHBhcnNlSW50KGVsLmRhdGFzZXQubGF0LDEwKSwgbG5nOiBwYXJzZUludChlbC5kYXRhc2V0LmxuZywxMCl9fSk7XG4gICAgICAgICAgLy8gLy8gVGhlIG1hcmtlciwgcG9zaXRpb25lZCBhdCBVbHVydVxuICAgICAgICAgIC8vIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtwb3NpdGlvbjoge2xhdDogcGFyc2VJbnQoZWwuZGF0YXNldC5sYXQsMTApLCBsbmc6IHBhcnNlSW50KGVsLmRhdGFzZXQubG5nLDEwKX0sIG1hcDogbWFwfSk7XG5cbiAgICAgICAgICBcbiAgICAgICAgeW1hcHMucmVhZHkoeW1hcHNfaW5pdCk7XG4gICAgICAgIGZ1bmN0aW9uIHltYXBzX2luaXQgKCkge1xuICAgICAgICAgIHZhciBteU1hcDtcbiAgICAgICAgICB2YXIgbWFwcyA9ICQoJy5tYXAnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zb2xlLmxvZyhtYXBzKTtcblxuICAgICAgICAgICQobWFwcykuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuICAgICAgICAgICAgdmFyIHlQcm9qZWN0cyA9IFtdO1xuXG4gICAgICAgICAgICBteU1hcCA9IG5ldyB5bWFwcy5NYXAoZWwsIHtcbiAgICAgICAgICAgICAgY2VudGVyOiBbNTUuNzYsIDM3LjY0XSxcbiAgICAgICAgICAgICAgem9vbTogMTcsXG4gICAgICAgICAgICAgIHR5cGU6IFwieWFuZGV4I21hcFwiLFxuICAgICAgICAgICAgICBiZWhhdmlvcnM6IFtcImRlZmF1bHRcIiwgXCJzY3JvbGxab29tXCJdXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbXlNYXAuYmFsbG9vbi5vcGVuKFxuICAgICAgICAgICAgICAgIFtlbC5kYXRhc2V0LmxhdCwgZWwuZGF0YXNldC5sbmddLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVhZGVyOiBlbC5kYXRhc2V0LmRlc2MsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRCb2R5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50Rm9vdGVyOiBlbC5kYXRhc2V0LmFkcmVzcyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgcGxhY2VNYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhbZWwuZGF0YXNldC5sYXQsZWwuZGF0YXNldC5sbmddLCB7IFxuICAgICAgICAgICAgICAgICAgICBiYWxsb29uQ2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhpZGVJY29uT25CYWxsb29uT3BlbjogdHJ1ZVxuICAgICAgICAgICAgICAgIH0se1xuICAgICAgICAgICAgICAgICAgICBwcmVzZXQ6IFwiaXNsYW5kcyNjaXJjbGVEb3RJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGljb25Db2xvciA6JyMzMzMnXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQocGxhY2VNYXJrKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiDQntGC0YDQsNCx0LDRgtGL0LLQsNC10Lwg0YDQtdGB0LDQudC3INCx0YDQsNGD0LfQtdGA0LBcbiAgICAgICAqL1xuICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luaXQgJiYgYXBwLnZhcnMudHJ1ZVJlc2l6ZSkge1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfSkoKTsiXX0=
