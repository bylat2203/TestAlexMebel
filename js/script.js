$(document).ready(function(){
    $('.photoslider').slick({
        arrows:true,
        slidesToShow:4,
        slideToScroll:2,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 2000,
        responsive:[
            {
            breakpoint: 1400,
            settings: {
                slidesToShow:3,
                slideToScroll:3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2,
                    slideToScroll:2
                    }
                },
            {
            breakpoint: 768,
            settings: {
                slidesToShow:1,
                slideToScroll:1
                }
            }
        ]
    });
});
    
$(document).ready(function(){
    $('.photoslider2').slick({
        arrows:true,
        slidesToShow:4,
        slideToScroll:2,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 2000,
        speed: 2000,
        responsive:[
            {
            breakpoint: 1400,
            settings: {
                slidesToShow:3,
                slideToScroll:3
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow:2,
                    slideToScroll:2,
                    }
                },
            {
            breakpoint: 768,
            settings: {
                slidesToShow:1,
                slideToScroll:1,
                arrows: false
                }
            }
        ]
    });
});
    