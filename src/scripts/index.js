import 'normalize.css'
import '../styles/index.scss';
import Swiper from 'swiper'

$(function () {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: false, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}"></span>`;
      },
    },

    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    on:{
      slideChange: function() {
        $('.swiper-slide .animated').removeClass('fadeInUp fadeInLeft')
        $(`.swiper-slide${this.activeIndex} .animated`).forEach(item => {
          $(item).addClass($(item).data('animate') || 'fadeInUp')
        })

        if (this.activeIndex > 0 && this.activeIndex < 4) {
          $('.swiper-indicator').css('display', 'block')
        } else {
          $('.swiper-indicator').css('display', 'none')
        }
      },
    },
  })

  $('.get-job').on('click', function (e) {
    mySwiper.slideTo(1)
  })
})
