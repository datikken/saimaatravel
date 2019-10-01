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