//COLLAPSE
$('[data-target-collapse]').each(function () {                     
  var $this = $(this);                                             
  var $toggle = $this.data('target-collapse');                     
  if ($this.hasClass('active')) {                                  
    $('[data-collapse="' + $toggle + '"]').stop().slideDown();     
  }                                                                
  $this.on('click', function () {                                  
    $this.toggleClass('active');                                   
    $('[data-collapse="' + $toggle + '"]').stop().slideToggle(300);
  });                                                              
});     

