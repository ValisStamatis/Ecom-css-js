$(document).ready(function () {


  /*SWIPERS*/
  const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
  });
  const swiper2 = new Swiper('.swiper2', {
    // Default parameters
    slidesPerView: 4,
    spaceBetween: 40,
    freeMode: {
      enabled: true,
      sticky: true,
    },
  });
  const swiper3 = new Swiper('.swiper3', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 0,
  });

  /* ACORDION */
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }


});