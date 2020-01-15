


// swiper 플러그인
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
    //   centeredSlides: true,
        spaceBetween: 20,
    //   grabCursor: true,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    });

     
// 탑 버튼 
    $(function(){

        $("#top_button").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
        });

    });


// 폰트사이즈 변경
    $(function(){
        $('.font_small, .font_big').click(function(){
            c_name = $(this).attr('class');
            font2 = $('.press_text .bottom').css('fontSize');
            var num = parseFloat(font2); //12
            var unit = font2.slice(-2); //px   
        
            if(c_name == "font_small") {
                if ( num > 9) { 
                    
                    $('.press_text .bottom').css({'fontSize':(num - 1) + unit});
                }
            } else {
                
                if ( num < 15) {
                $('.press_text .bottom').css({'fontSize':(num + 1) + unit});
                }
            }
        });
    });