$(document).ready(function () {
  $(".logo-slider__owl-carousel").owlCarousel({
    loop: true, //Зацикливаем слайдер
    nav: false, //Отключение навигации
    autoplay: false, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 2000, //Время смены слайда
    // autoWidth: true,
    responsive: {
      //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
        margin: 10, //Отступ от элемента справа в 28px
      },
      768: {
        items: 3.6,
        margin: 16, //Отступ от элемента справа в 28px
      },

    },
    onInitialized: slideOpacity,
    onTranslated: slideOpacity
  })

  function slideOpacity() {
    $('.logo-slider__owl-carousel .owl-item.opacity').removeClass('opacity');
    $('.logo-slider__owl-carousel .owl-item.active').eq(-1).addClass('opacity');
  }
});

