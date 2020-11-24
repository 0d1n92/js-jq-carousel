$(document).ready(function() {

   $('.btn_next').click(function(){
    var imgActive=$('.carousel_img > li.active');
    var dotActive=$('.dots> li.active');
     nextSlider(imgActive,dotActive);
   });
   $('.btn_prev').click(function(){
    var imgActive=$('.carousel_img > li.active');
    var dotActive=$('.dots> li.active');
     prevSlider(imgActive, dotActive);
   });

});



function nextSlider(imgNow,dotNow) {
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

function prevSlider(imgNow,dotNow){
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
