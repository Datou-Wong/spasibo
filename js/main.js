// 引入 SCSS 檔案
import '../assets/scss/all.scss';
// 引入 Bootstrap JS
import 'bootstrap/dist/js/bootstrap.min.js';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

console.log('Hello world');

// 上方導覽透明度變化
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const logo = document.querySelector(".logo");
  if (!navbar || !logo) return;

  const scrollY = window.scrollY;
  const triggerHeight = logo.offsetHeight;

  // 透明度
  let opacity = Math.min(scrollY / triggerHeight * 1);
  navbar.style.backgroundColor = `rgba(190, 136, 116, ${opacity})`;
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


AOS.init({
  duration: 1000, // 動畫持續 1 秒
  easing: 'ease-in-out'
});



