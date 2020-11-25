$(document).ready(function() {
   //change image at click btn

   $('.btn_next, .carousel_img> li').click(function(){

     nextSlider();

   });
   $('.btn_prev').click(function(){

     prevSlider();

   });

   $(document).keydown(function(e){

     if(e.which==39 || e.keycode==39) nextSlider();
     else if (e.which==37 || e.keycode==37) prevSlider();

    });

    $('.dots> li').click( function(){
      // var test
      dotsSliderClick($(this))

    });

  });

// change image at the click of the icon right
function nextSlider() {

   var positionNow=$('.carousel_img > li.active,.dots> li.active');
   var positionFirst=  $('.carousel_img > li.first,.dots > li.first');
   if(positionNow.hasClass('last')){
     positionNow.removeClass('active');
     positionFirst.addClass('active');
   }else {
       positionNow.removeClass('active');
       positionNow.next().addClass('active');
     }

}

// change image at the click of the icon left
function prevSlider() {

  var positionNow=$('.carousel_img > li.active,.dots> li.active');
  var positionLast=  $('.carousel_img > li.last,.dots > li.last');
  if(positionNow.hasClass('first')){
    positionNow.removeClass('active');
    positionLast.addClass('active');
  }else {
      positionNow.removeClass('active');
      positionNow.prev().addClass('active');
    }

}

//change value at click dot
function dotsSliderClick(element){

  $('.carousel_img > li.active, .dots > li').removeClass('active');
  $('.carousel_img > li').eq($(element).index()).addClass('active');
  $('.dots > li').eq($(element).index()).addClass('active');

}
