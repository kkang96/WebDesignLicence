$(document).ready(function () {

  // nav - 가로유형1
  $('.nav_width1 > ul > li').mouseover(function () {
    $(this).find(".sub").stop().slideDown(300);
  });
  $('.nav_width1 > ul > li').mouseout(function () {
    $(this).find('.sub').stop().slideUp(300);
  });
});