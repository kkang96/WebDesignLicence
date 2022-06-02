$(function () {
  // nav
  $('#wrap header nav ul > li').mouseover(function(){
    $('#wrap header nav ul > li > .submenu').stop().slideDown(300);
    $('#wrap header .header-bg').stop().slideDown(300);
  });
  $('#wrap header nav ul > li').mouseleave(function(){
    $('#wrap header nav ul > li > .submenu').stop().slideUp(300);
    $('#wrap header .header-bg').stop().slideUp(300);
  });
  
  // banner
  var slideCount = $('.slideImg').length;
  var currentIndex = 0;
  var slidePosition;

  setInterval(function() {
    if (currentIndex < slideCount - 1){
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    slidePosition = currentIndex * -1200 + 'px';

    $('.slideList').animate({ left: slidePosition }, 400);
  }, 3000);

  // popup
  $('.box1 ul li').eq(0).on('click', function () {
    $('.popup-bg').fadeIn();
    $('.popup').fadeIn();
  });
  $('.popup .close').eq(0).on('click', function () {
    $('.popup-bg').fadeOut();
    $('.popup').fadeOut();
  });
});
