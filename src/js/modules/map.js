export function initMap() {
  //Переменная для включения/отключения индикатора загрузки
  let spinner = document.querySelector(".contacts__map .loader");
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  let check_if_load = false;

  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init() {
    let myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.208901, 39.631539], // координаты центра на карте
      zoom: 9, // коэффициент приближения карты
      controls: ["zoomControl", "fullscreenControl"], // выбираем только те функции, которые необходимы при использовании
    });
    let myPlacemarkTemp = new ymaps.Placemark(
      [47.208901, 39.631539],
      {
        hintContent: "Наш офис",
        balloonContent: "Вход со двора",
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "@img/theme/marker.png",
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38],
      }
    );
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    let layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.classList.remove("is-active");
    });
  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов)
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      let tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (let k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback) {
    let script = document.createElement("script");

    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" || script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      // Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;contacts__map&#34;
  let ymap = function () {
    document
      .querySelector(".contacts__map")
      .addEventListener("mouseenter", function () {
        if (!check_if_load) {
          // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

          // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true;

          // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.classList.add("is-active");

          // Загружаем API Яндекс.Карт
          loadScript(
            "https://api-maps.yandex.ru/2.1/?apikey=a0935634-5e5a-4ebb-94cb-26085c4739f8&lang=ru_RU",
            function () {
              // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
              ymaps.load(init);
            }
          );
        }
      });
  };

  //Запускаем основную функцию
  ymap();
}
