// 引入 SCSS 檔案
import './assets/scss/all.scss';
// 引入 Bootstrap JS
import 'bootstrap/dist/js/bootstrap.min.js';

console.log('Hello world');

// 上方導覽透明度變化
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  if (!navbar || !logo) return;

  const scrollY = window.scrollY;
  const triggerHeight = logo.offsetHeight / 2;

  // 透明度
  let opacity = Math.min(scrollY / triggerHeight * 0.3, 0.3);
  navbar.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
});

// 促銷左右滑動
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});