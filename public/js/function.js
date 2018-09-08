var pContainerHeight=$('.header').height();
$(window).scroll(function(){
  var wScroll=$(this).scrollTop();
  if(wScroll<=pContainerHeight){
    $('.caption-header-logo').css(
      {'transform':'translate(0px, -'+wScroll/3+'%)'});
    $('.back-bird').css(
      {'transform':'translate(0px, '+wScroll/4+'%)'});
    $('.caption-header').css(
      {'transform':'translate(0px, -'+wScroll/2+'%)'});
  }
}
);
