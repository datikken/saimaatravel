
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