$(function(){
  var _slideNum = $('header').next('div').attr('class');
  
  if (_slideNum == 'slide01') {
    var currentIndex = 0;
    setInterval(function () {
      if (currentIndex < 2) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      var slidePosition = currentIndex * -300 + 'px';
      $('.slide01 .slideList').animate({ top: slidePosition }, 400);
    }, 3000);
  } else if (_slideNum == 'slide02'){
    // banner
    var slideCount = $('.slide02 .slideImg').length;
    var currentIndex = 0;
    var slidePosition;

    setInterval(function () {
      if (currentIndex < slideCount - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      slidePosition = currentIndex * -1200 + 'px';

      $('.slide02 .slideList').animate({ left: slidePosition }, 400);
    }, 3000);
  } else if (_slideNum == 'slide03'){
    $('.slideList').children('div:gt(0)').hide();
    var currentIndex = 0;

    setInterval(function () {
      var next = (currentIndex + 1) % 3;
      $('.slideList').find('div').eq(currentIndex).fadeOut();
      $('.slideList').find('div').eq(next).fadeIn();
      currentIndex = next;
    }, 3000);
  }
});