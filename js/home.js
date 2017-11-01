$(document).ready(function(){

  //when hover over tile, opacity to zero
  $('.tile').hover(function(){
    $(this).css({
      "opacity":"0",
      "animation-name": "none"
    });
  }, function() {
    $(this).css({
      "animation-name": "tileFade",
      "animation-duration": (".5s"),
      "opacity": ".7"
    });
  });
  //when hover over button-tile, roll open the button
  $('.button-tile').hover(function() {
    $(this).css({
      "width": "17vw",
      "margin-left": "-10vw",
      "background-color": "var(--color-primary)",
    });
    $('p', this).css({
      "font-size": "2.5vw",
      "color": "white"
    });
  }, function() {
    $(this).css({
      "width": "7vw",
      "margin-left": "0vw",
      "background-color": "white"
    });
    $('p', this).css({
      "font-size": "1.6vw",
      "color": "var(--color-dark)"
    });
  });
  //when click on link, open corresponding page
  $('#link-pg1').click(function() {
    $('#pg1').css({"display": "inline", "margin-top": "-100%"});
  });
  $('#link-pg2').click(function() {
    $('#pg2').css({"display": "inline"});
    $('header').css({"margin-top": "-100vh"});
  });
  $('#link-pg3').click(function() {
    $('#pg3').css({"display": "inline"});
    $('header').css({"margin-top": "-100vh"});
  });
  $('#link-pg4').click(function() {
    $('#pg4').css({"display": "inline"});
    $('header').css({"margin-top": "-100vh"});
  });


});
