let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    let scroll_value = window.scrollY;
    if (scroll_value>150) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
})
//index testimonial slider--------------
$(function(){
    $('.testimonialSlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        prevArrow:'.btn1',
        nextArrow:'.btn2',
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
    });
})
$(function() {
    $('.counterup').counterUp({
        delay: 10,
        time: 1000
    });
});
// my toggler--------------
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');
let myicon = document.querySelector('.myicon');

myicon.addEventListener('click', ()=>{
  line1.classList.toggle('rotright');
  line2.classList.toggle('none');
  line3.classList.toggle('rotleft');
});