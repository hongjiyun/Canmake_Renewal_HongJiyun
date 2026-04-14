document.addEventListener("DOMContentLoaded", function () {
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");

  new Swiper(".mySwiper", {
    // spaceBetween: 30,

  speed: 1000,
effect: "slide",
loop: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
  });
});


//img change 
const menuItems = document.querySelectorAll('.menu_img_title img');

menuItems.forEach(img => {
  const originalSrc = img.src; 
  const hoverSrc = originalSrc.replace('_img.png', '_img2.png'); 

  //mouse on
  img.parentElement.parentElement.addEventListener('mouseenter', () => {
    img.src = hoverSrc;
  });

  // mouse off
  img.parentElement.parentElement.addEventListener('mouseleave', () => {
    img.src = originalSrc;
  });
});


