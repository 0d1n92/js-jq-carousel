$(document).ready(function() {
   //change image at click btn
   $('.btn_next, .carousel_img> li').click(function(){
     nextSlider();

   });
   $('.btn_prev').click(function(){
     console.log("test");
     prevSlider();
   });
    //change image at click dots;
   //change image at press key arrow
   $(document).keydown(function(e){
     if(e.which==39 || e.keycode==39){
       var imgActive=$('.carousel_img > li.active');
       var dotActive=$('.dots> li.active');
       nextSlider(imgActive,dotActive);
     } else if (e.which==37 || e.keycode==37) {
       var imgActive=$('.carousel_img > li.active');
       var dotActive=$('.dots> li.active');
        prevSlider(imgActive, dotActive);
     }
    });

        $('.dots> li').click( function(){
          // var test
        $('.carousel_img > li.active, .dots > li').removeClass('active');
        $('.carousel_img > li').eq($(this).index()).addClass('active');
        $('.dots > li').eq($(this).index()).addClass('active');

        });

  });

//event to click btn right
function nextSlider() {
  var imgNow=$('.carousel_img > li.active');
  var dotNow=$('.dots> li.active');
   if(imgNow.hasClass('last')){
    imgNow.removeClass('active');
    dotNow.removeClass('active');
    $('.carousel_img > li.first').addClass('active');
    $('.dots > li.first').addClass('active');

  }else {
    imgNow.removeClass('active');
    dotNow.removeClass('active');
    imgNow.next().addClass('active');
    dotNow.next().addClass('active');
  }

}
//event to click btn left
function prevSlider(){
  var imgNow=$('.carousel_img > li.active');
  var dotNow=$('.dots> li.active');
  if(imgNow.hasClass('first')){
   imgNow.removeClass('active');
   dotNow.removeClass('active');
   $('.carousel_img > li.last').addClass('active');
  $('.dots > li.last').addClass('active');

 } else{
  console.log('test');
  imgNow.removeClass('active');
  dotNow.removeClass('active');
  imgNow.prev().addClass('active');
  dotNow.prev().addClass('active');
  }
}
