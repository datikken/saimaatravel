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