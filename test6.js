
$(function(){
$('.f-top-logo').click(function() {
        $('.sp-menu-top').slideToggle();
	});
 });

$(function(){
 $('.f-top-logo').click(function(){
  $('.wrapper').slideToggle();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
  $('.wrapper').slideToggle();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
  $('.sp-menu-top').slideToggle();
 });
});

$(function(){
 $('.play').click(function(){
  $('.play').hide();
 });
});

$(function(){
 $('.play').click(function(){
  $('.stop').show();
 });
});

$(function(){
 $('.stop').click(function(){
  $('.play').show();
 });
});

$(function(){
 $('.stop').click(function(){
  $('.stop').hide();
 });
});



$(function() {
    $('.play').click(function() {
        if($('#video1')[0].paused){
          $('#video1')[0].play();
        }else{
          $('#video1')[0].pause();
        }
    });
});

$(function() {
    $('.stop').click(function() {
        if($('#video1')[0].paused){
          $('#video1')[0].play();
        }else{
          $('#video1')[0].pause();
        }
    });
});

/*
$(function(){
 $('.sp-link-log').click(function(){
 	$('.wrapper').slideToggle();
 });
});

$(function(){
 $('.top-logo2').click(function(){
 	$('.wrapper').hide();
 });
});

$(function(){
 $('.top-logo2').click(function(){
 	$('.last').hide();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
 	$('.sp-menu-top').hide();
 });
});

$(function(){
 $('.sp-link-log').click(function(){
 	$('.last').show();
 });
});

$(function(){
  $(window).scroll(function(){
     if (100 < $(window).scrollTop() && $(window).scrollTop() < 4500) {
       $('.menu2').fadeIn(400);
}
else {
      $('.menu2').fadeOut(400);
    }
 });
 });

$(function(){
  $(window).on('load scroll', function(){
      $('.menu3').hide();
   });
});

$(function(){
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() > 300) {
      $('.sc-top').fadeIn(400);
    } else {
      $('.sc-top').fadeOut(400);
    }
  });
});

*/


