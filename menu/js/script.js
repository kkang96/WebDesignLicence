$(function() {
  $('header.menu01 nav ul > li').mouseenter(function () {
    $('nav ul > li > ul.submenu').stop().slideDown();
    $('.header-bg').stop().slideDown();
  });

  $('header.menu01 nav ul > li').mouseleave(function () {
    $('nav ul > li > ul.submenu').stop().slideUp();
    $('.header-bg').stop().slideUp();
  });

  $('header.menu02 nav ul > li').mouseenter(function(){
    $('nav ul > li > ul.submenu').stop().slideDown();
  });

  $('header.menu02 nav ul > li').mouseleave(function(){
    $('nav ul > li > ul.submenu').stop().slideUp();
  });

  $('header.menu03 nav ul > li').mouseenter(function () {
    $(this).find('.submenu').stop().slideDown();
  });

  $('header.menu03 nav ul > li').mouseleave(function () {
    $(this).find('.submenu').stop().slideUp();
  });
  
  $('.menu04 nav ul > li').mouseenter(function () {
    $(this).find('.submenu').stop().slideDown(500);
  });

  $('.menu04 nav ul > li').mouseleave(function () {
    $(this).find('.submenu').stop().slideUp(500);
  });

  $('.menu05 nav > ul > li').hover(
    function () {
      $(this).find('.submenu').stop().slideDown();
    },
    function () {
      $(this).find('.submenu').stop().slideUp();
    }
  );
})