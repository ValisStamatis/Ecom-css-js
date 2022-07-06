$(document).ready(function () {
  /*SWIPERS*/
  const swiper = new Swiper(".swiper", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
  });
  const swiper2 = new Swiper(".swiper2", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 40,
    freeMode: {
      enabled: true,
      sticky: true,
    },
    breakpoints: {
      // when window width is >= 320px
      990: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  const swiper3 = new Swiper(".swiper3", {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
  });

  /* ACORDION */
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $("#nav-toggle").click(function () {
    console.log("clicked");
  });
  $("#nav-toggle").click(function () {
    $(".nav__menu").addClass("mobile-show-menu");
    $(".shadow").addClass("active-shadow");
  });
  $("#nav-close").click(function () {
    $(".nav__menu").removeClass("mobile-show-menu");
    $(".shadow").removeClass("active-shadow");
  });
  $("#nav-category-toggle").click(function () {
    $(".nav__category-menu").addClass("mobile-show-menu");
    $(".shadow").addClass("active-shadow");
  });
  $("#nav-category-close").click(function () {
    $(".nav__category-menu").removeClass("mobile-show-menu");
    $(".shadow").removeClass("active-shadow");
  });
  /* newsletter popup */
  setTimeout(function () {
    $(".newsletter__popup").removeClass("popup-hide");
    $(".shadow").addClass("active-shadow");
  }, 2000);
  $(".popup__close").click(function () {
    $(".newsletter__popup").addClass("popup-hide");
    $(".shadow").removeClass("active-shadow");
  });
});
