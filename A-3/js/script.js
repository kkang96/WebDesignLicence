$(function () {
  // nav
  $('#wrap header nav ul > li').hover(function(){
    $(this).find('.submenu').stop().slideDown(300);
  },
  function(){
    $(this).find('.submenu').stop().slideUp(300);
  });

  // slide
  $('.slideList').children('div:gt(0)').hide();
  var currentIndex = 0;
  
  setInterval(function(){
    var next = (currentIndex + 1) % 3;
    $('.slideList').find('div').eq(currentIndex).fadeOut();
    $('.slideList').find('div').eq(next).fadeIn();
    currentIndex = next;
  }, 3000);

  // tab
  $('ul.tabs li').click(function () {
    var tab_class = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('active');
    $('.tab-content div').removeClass('active');

    $(this).addClass('active');
    $('.' + tab_class).addClass('active');
  });

  // popup
  $('.tab-1 ul li').eq(0).on('click', function() {
    $('.popup-bg').fadeIn();
    $('.popup').fadeIn();
  });
  $('.close').on('click', function() {
    $('.popup-bg').fadeOut();
    $('.popup').fadeOut();
  });
});
