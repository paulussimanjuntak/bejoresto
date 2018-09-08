var hours = 1; // Reset when storage is more than 1hours
var now = new Date().getTime();                         
var setupTime = localStorage.getItem('setupTime');      
if (setupTime == null) {                                
     $(window).on('load',function(){                    
        $( "#modal1" ).modal('show');                    
        localStorage.setItem('setupTime', now)          
        });                                             
                                                        
} else {                                                
    if(now-setupTime > hours*60*60*1000) {              
        localStorage.clear();                           
    }                                                   
}                                                       

    $(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       $('#modal1').modal('hide');
    }
});

var hours = 1; // Reset when storage is more than 1hours
var now = new Date().getTime();                         
var setupTime = localStorage.getItem('setupTime');      
if (setupTime == null) {                                
     $(window).on('load',function(){                    
        $( "#modal" ).modal('show');                    
        localStorage.setItem('setupTime', now)          
        });                                             
                                                        
} else {                                                
    if(now-setupTime > hours*60*60*1000) {              
        localStorage.clear();                           
    }                                                   
}                                                       

    $(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       $('#modal').modal('hide');
    }
});

