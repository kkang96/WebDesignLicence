$(function () {
  // nav
  $('#wrap header nav ul > li').mouseover(function () {
      $('#wrap header nav ul > li > ul.submenu').stop().slideDown(300);
  });
  $('#wrap header nav ul > li').mouseleave(function () {
    $('#wrap header nav ul > li > ul.submenu').stop().slideUp(300);
  });

  // banner
  var currentIndex = 0;
  setInterval(function(){
    if (currentIndex < 2) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    var slidePosition = currentIndex * (-300)+"px";

    $('.slideList').animate({top: slidePosition}, 400);
  }, 3000);

  // tab
  var tabBtn = $('.tab-btn > ul > li');
  var tabContents = $('.tab-contents > div');

  tabContents.hide().eq(0).show();
  tabBtn.click(function (e) {
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    tabBtn.removeClass('active');
    target.addClass('active');
    tabContents.css('display', 'none');
    tabContents.eq(index).css('display', 'block');
  });
  
  // popup
  $('.layerPopup').click(function(){
    $('.layer').fadeIn();
    $('.layer-bg').fadeIn();
  });
  $('.layer .close').click(function(){
    $('.layer').fadeOut();
    $('.layer-bg').fadeOut();
  });
});

