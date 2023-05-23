export function init() {
  // Создание карты.
  const myMap = new ymaps.Map('map-yandex', {
    center: [47.208901, 39.631539],
    zoom: 9,
    controls: ['zoomControl', 'fullscreenControl'],
  });
  const myPlacemarkTemp = new ymaps.Placemark(
    [47.208901, 39.631539],
    {
      hintContent: 'Наш офис',
      balloonContent: 'Вход со двора',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../assets/img/theme/marker.png',
      iconImageSize: [32, 32],
      iconImageOffset: [-5, -38],
    }
  );
  myMap.geoObjects.add(myPlacemarkTemp);
  const layer = myMap.layers.get(0).get(0);
  // console.log('layer: ', layer);
}
