function initMap(){var myLatLng={lat:-8.8025837,lng:115.2104061};var map=new google.maps.Map(document.getElementById('map'),{zoom:17,center:myLatLng});var marker=new google.maps.Marker({position:myLatLng,map:map,});}$('[data-target-collapse]').each(function(){var $this=$(this);var $toggle=$this.data('target-collapse');if($this.hasClass('active')){$('[data-collapse="'+$toggle+'"]').stop().slideDown();}$this.on('click',function(){$this.toggleClass('active');$('[data-collapse="'+$toggle+'"]').stop().slideToggle(300);});});$('#tabs li').on('click',function(){var tab=$(this).data('tab');$('#tabs li').removeClass('is-active');$(this).addClass('is-active');$('#tab-content div').removeClass('is-active');$('div[data-content="'+tab+'"]').addClass('is-active');});

$(document).ready(function(){$(function(){$('a').click(function(){$('html, body').animate({scrollTop:$($(this).attr('href')).offset().top},1000);return false;});});$('.responsive-slider').slick({autoplay:true,autoplaySpeed:2000,infinite:true,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:6,slidesToScroll:1,}},{breakpoint:800,settings:{slidesToShow:3,slidesToScroll:2,dots:true,infinite:true,}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,dots:true,infinite:true,}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:true,infinite:true,autoplay:true,autoplaySpeed:2000,}}]});});

$(document).ready(function() {
    $('.about-slider').slick({
        // dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                
            }
        }, {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });


});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('is-active');
        })
        $(this).addClass('is-active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top + 0
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#bejo-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#bejo-nav a').removeClass("is-active");
            currLink.addClass("is-active");
        }
        else{
            currLink.removeClass("is-active");
        }
    });
}


$(document).ready(function() {

    $('.about-restaurant').slick({
        // dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    });


});
