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
  