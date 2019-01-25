$(document).ready(function(){
    //кастомный скроллбар для страницы контактов
    var scrollbar_contact_height,
        mouse_down_scroll,
        mouse_position,
        last_y_scroll,
        position_y,
        kf_lenght
    var scrollbarfunction = function(){
        if($('.map_zavods .sidebar .block.active .item.active').length>1){
                scrollbar_contact_height = 0
                mouse_down_scroll = false
                mouse_position = 0
                last_y_scroll = 0
                position_y = 0
            for(i = 0;i<$('.map_zavods .sidebar .block.active .item.active').length;i++){
                scrollbar_contact_height += $('.map_zavods .sidebar .block.active .item.active').eq(i).height()+20;
            }
                kf_lenght = $('.map_zavods .sidebar .block.active').height()/scrollbar_contact_height,
                offset_scrollbar = $('.map_zavods .scrollbar .track').offset().top;
            $('.map_zavods .scrollbar .track').height(kf_lenght * $('.map_zavods .scrollbar').height())
            
            $('.map_zavods .scrollbar .track').mousedown(function(e){
                mouse_down_scroll = true
                
                mouse_position = e.screenY - offset_scrollbar + $(document).scrollTop()-50;
            })
            $('.map_zavods .sidebar').mouseup(function(){
                mouse_down_scroll = false;
                last_y_scroll = position_y
            })
            $('.map_zavods .sidebar').mousemove(function(e){
                if(mouse_down_scroll){
                    position_y = e.screenY - offset_scrollbar + $(document).scrollTop() - 50 - mouse_position +last_y_scroll;
                    if((position_y+$('.map_zavods .scrollbar .track').height()<=$('.map_zavods .sidebar').height()&&position_y>0)){
                        $('.map_zavods .scrollbar .track').css('top',position_y)
                        kf_moving = position_y/($('.map_zavods .scrollbar').height()-$('.map_zavods .scrollbar .track').height())
                        kf_moving = kf_moving.toFixed(2)
                        $('.map_zavods .sidebar .block.active').scrollTop(kf_moving*(scrollbar_contact_height - $('.map_zavods .sidebar .block.active').height()))
                    }
                }
            })
            $('.map_zavods .sidebar .block.active').scroll(function(){
                if(!mouse_down_scroll){
                kf_moving = $(this).scrollTop() / (scrollbar_contact_height - $('.map_zavods .sidebar .block.active').height())
                position_y =($('.map_zavods .scrollbar').height()-$('.map_zavods .scrollbar .track').height()) * kf_moving
                
                    last_y_scroll = position_y
                
                $('.map_zavods .scrollbar .track').css('top',position_y)
                }
            })
            
        }
        
    }
    
    scrollbarfunction();
    $('.map_zavods .content ul.type_placemarks li').click(function(){
        $('.map_zavods .sidebar .block.active').scrollTop(0)
        //$('.map_zavods .scrollbar .track').css('top',0)
        setTimeout(function() {
            scrollbarfunction();
        }, 50);
        
    })
    //кастомный скроллбар для страницы контактов
})