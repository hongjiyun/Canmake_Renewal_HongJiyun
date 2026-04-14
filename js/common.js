window.addEventListener('scroll', function () {
  const topBtn = document.getElementById('topBtn');
  if (!topBtn) return;

  if (window.scrollY > 500) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    topBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const hamburger = document.querySelector('.hamburger_menu');
  const gnb = document.querySelector('.gnb');
  const hamburgerImg = document.querySelector('.hamburger_menu img');

  if (!hamburger || !gnb) return;

  hamburger.addEventListener('click', () => {
    gnb.classList.toggle('active');

    if (hamburgerImg) {
      hamburgerImg.src = gnb.classList.contains('active')
        ? "./img/main/hamburger_menu_x_icon.png"
        : "./img/main/hamburger_menu_icon.png";
    }
  });
});