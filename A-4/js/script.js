$(document).ready(function () {
  // nav
  $('header nav ul > li').mouseover(() => {
    $('.header-bg').stop().slideDown(300);
    $('ul.submenu').stop().slideDown(300);
  });
  $('header nav ul > li').mouseleave(() => {
    $('.header-bg').stop().slideUp(300);
    $('ul.submenu').stop().slideUp(300);
  });

  // banner
  $('.slideImg:gt(0)').hide();
  var currentIndex = 0;

  setInterval(() => {
    var next = (currentIndex + 1) % 3;
    $('.slideImg').eq(currentIndex).fadeOut();
    $('.slideImg').eq(next).fadeIn();
    currentIndex = next;
  }, 3000);

  // popup 
  $('.notice ul li:first').on('click', () => {
    $('.popup-bg').fadeIn();
    $('.popup').fadeIn();
  });
  $('.close').on('click', () => {
    $('.popup-bg').fadeOut();
    $('.popup').fadeOut();
  })
});