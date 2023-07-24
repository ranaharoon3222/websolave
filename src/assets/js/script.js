$('.creative').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

})

$(".menu-icon").click(function () {
  jQuery(this).toggleClass("opened");
  $("ul.nav-flex").toggleClass("opened");
});

$(document).ready(function () {
  // Hover event for desktop
  // Check if the window width is greater than 922px (adjust as needed)
  if ($(window).width() > 992) {
    $(".tabs > li").hover(
      function () {
        $(this).addClass("hovered");
      },
      function () {
        $(this).removeClass("hovered");
      }
    );
  }
  // Click event for mobile
  // Check if the window width is greater than 768px (adjust as needed)
  if ($(window).width() < 992) {
    $(".tabs > li").on("click", function () {
      if ($(this).hasClass("clicked")) {
        $(this).removeClass("clicked");
      } else {
        $(this).addClass("clicked");
      }
    });
  }
});
