


// 탑 버튼 
    $(function(){
        $("#top_button").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 900);
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

                if ( num > 8) { 
                    
                    if ( num == 9) {
                        
                        $('footer .control .font_s_end').css({'display':'block'});
    
                        setTimeout(function() { 
                            $("footer .control .font_s_end").css({ 'display':'none' }); },800);

                            return false;
                    }

                    $('.press_text .bottom').css({'fontSize':(num - 1) + unit});
                    $('footer .control .font_s').css({'display':'block'});

                    setTimeout(function() { 
                        $("footer .control .font_s").css({ 'display':'none' }); },800);
                }

            } else {
               
                    if ( num < 16) {

                        if ( num == 15) {
                        
                            $('footer .control .font_b_end').css({'display':'block'});
        
                            setTimeout(function() { 
                                $("footer .control .font_b_end").css({ 'display':'none' }); },800);
    
                                return false;
                        }

                        $('.press_text .bottom').css({'fontSize':(num + 1) + unit});
                        $('footer .control .font_b').css({'display':'block'});

                        setTimeout(function() { 
                            $("footer .control .font_b").css({ 'display':'none' }); },800);
                    }
                }
            
        });
    });


  