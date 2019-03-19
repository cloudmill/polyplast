$(document).ready(function(){
    sliders();
    custom();
    switching();
    filter();
    maps();
    size_section();
})
$(window).on('resize',function(){
    size_section();
})
function size_section(){
    //корректировка размеров
var height,m_left,width;
    if($('#main_slider .slider_one .content').length>0){
        m_left = $('#main_slider .slider_one .content').offset().left;
        width =  Number($('#main_slider .slider_one .content').css('width').replace("px",''));
    }
    if($(window).width()>990){
        if($('.rounds').length>0){
            $('.rounds .round_4').height($('.rounds .round_4').width());
        }
        
    }
    else{
        if($('.rounds').length>0){
            $('.rounds .round_4').height(680+"px");
            $('.rounds .round_4').width(680+"px");
        }
    }
    $('.rounds .round_4').height($('.rounds .round_4').width());
    height = $(window).height();
    $('.page_404').css('height',height);
    $('#main_slider').css('height',height);
    $('.blackhole').css('height',height);
    $('.page_test').css('height',height);
    
    $('.main_slider').css('height',height);
    $('#main_slider > .slick-list').css('height',height);
    $('#main_slider > .slick-list .section').css('height',height);
        
    $('.over_line').css('height',height+"px");
    $('.over_line.two').css('left',m_left+"px");
    $('.over_line.three').css('left',m_left+197.6+"px");
    $('.over_line.four').css('left',m_left+197.3*2+"px");
    $('.over_line.five').css('right',m_left+"px");

    
    if($(window).width()>=1400){
        $('#main_slider .two .content').css('width',m_left+width+'px');
        $('#main_slider .three .content').css('width',width+'px');
        $('#main_slider .three .content').css('margin-left',m_left/2+'px');
        $('#main_slider .three .content').css('padding-left',m_left/2+'px');
        $('#main_slider .five .content').css('width',width+m_left-70+'px');


        $('#main_slider .six .content').css('width',width+'px');
        $('#main_slider .six .content').css('margin-left',m_left/2+'px');
        $('#main_slider .six .content').css('padding-left',m_left/2+'px');
        $('#main_slider .six .content ').css('width',width+m_left+'px');
        $('#main_slider .six .content .container').css('left',m_left/2+'px');
        $('#main_slider .six .content .container .slider').css('width',width+'px');
    }
    else{
        $('#main_slider .two .content').attr('style','');
        $('#main_slider .three .content').attr('style','');
        $('#main_slider .five .content').attr('style','');
        $('#main_slider .six .content').attr('style','');
        $('#main_slider .six .content .container').attr('style','');
    }
}
function filter(){
    var cat_active = 0;
    $('.news_page .block .object').hide(0)
    $('.news_page .block .object').eq(0).show(0)
    $('.news_page .type_content .col').click(function(){
        if(!$(this).hasClass('active')){
            $('.news_page .type_content .col').removeClass('active')
            $(this).addClass('active')
            $('.news_page .block .object').fadeOut(300)
            $('.news_page .block .object').eq($(this).index()).delay(310).fadeIn(300)
            cat_active = $(this).index()
        }
    })
    var filter_news = function(categories,items){
        if(categories.eq(0).hasClass('active')){
            items.show()
            items.delay(100).addClass('show')
        }
        else{
            count = 0;
            for(i = 0;i< categories.length;i++){
                if(categories.eq(i).hasClass('active')){
                    for(j=0;j<items.length;j++){
                        if(categories.eq(i).children('a').text() == items.eq(j).children('.img').children('p').attr('data-type')){
                            items.eq(j).delay((count)*100).show()
                            
                            items.eq(j).delay((1+count)*100).addClass('show')
                            count ++;
                        }
                        console.log(items.eq(j).children('.img').children('p').attr('data-type'))
                        console.log(categories.eq(i).children('a').text())
                    }
                }
                else{
                    for(j=0;j<items.length;j++){
                        if(categories.eq(i).children('a').text() == items.eq(j).children('.img').children('p').attr('data-type')){
                            items.eq(j).removeClass('show')
                            items.eq(j).delay(100).hide()
                        }
                    }
                }
            }
        }
    }

    $('.news_page .block .object ul.categories li').click(function(event){
        if($(this).attr('class') != 'active'){
            $('.news_page .block .object').eq(cat_active).find('ul.categories li:first-child').removeClass('active');
            $(this).addClass('active');
            index = $('.news_page .block .object').eq(cat_active).find('ul.categories li').index(this)

            if(($('.news_page .block .object').eq(cat_active).find('ul.categories li.active').length == ($('.news_page .block .object').eq(cat_active).find('ul.categories li').length - 1))||$(this).index()==0){
                $('.news_page .block .object').eq(cat_active).find('ul.categories li').removeClass('active');
                $('.news_page .block .object').eq(cat_active).find('ul.categories li:first-child').addClass('active');
            }
            filter_news($('.news_page .block .object').eq(cat_active).find('ul.categories li'),$('.news_page .block .object').eq(cat_active).find('.list .item'));
        }
        else if(cat_active == 2){
            
            index = $('.news_page .block .object').eq(cat_active).find('ul.categories li').index(this)
            $(this).removeClass('active')
            if(($('.news_page .block .object').eq(cat_active).find('ul.categories li.active').length == 0)){
                $('.news_page .block .object').eq(cat_active).find('ul.categories li:first-child').addClass('active'); 
            }
            filter_news($('.news_page .block .object').eq(cat_active).find('ul.categories li'),$('.news_page .block .object').eq(cat_active).find('.list .item'));
        }
        else{
            event.preventDefault();
        }
        
    })
    $('.news_page .block .object ul.categories li a .close').click(function(){
        event.preventDefault();
        index = $(this).parent().parent().removeClass('active');
        if(($('.news_page .block .object').eq(cat_active).find('ul.categories li.active').length == 0)){
            $('.news_page .block .object').eq(cat_active).find('ul.categories li:first-child').addClass('active'); 
        }
        filter_news($('.news_page .block .object').eq(cat_active).find('ul.categories li'),$('.news_page .block .object').eq(cat_active).find('.list .item'));
        return false;
    })



    $('.scientific_article ul.categories li').click(function(){
        if($(this).attr('class') != 'active'){
            $('.scientific_article ul.categories li:first-child').removeClass('active');
            $(this).addClass('active');
            index = $('.scientific_article ul.categories li').index(this)

            if(($('.scientific_article ul.categories li.active').length == ($('.scientific_article ul.categories li').length - 1))||$(this).index()==0){
                $('.scientific_article ul.categories li').removeClass('active');
                $('.scientific_article ul.categories li:first-child').addClass('active');
            }
            filter_news($('.scientific_article ul.categories li'),$('.scientific_article .items .item'));console.log()
        }
        else {
            
            index = $('.scientific_article ul.categories li').index(this)
            $(this).removeClass('active')
            if(($('.scientific_article ul.categories li.active').length == 0)){
                $('.scientific_article ul.categories li:first-child').addClass('active'); 
            }
            filter_news($('.scientific_article ul.categories li'),$('.scientific_article .items .item'));
        }
    })
    $('.scientific_article ul.navigation li .drop_but').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('open')
        console.log('awdaw')
    })
}
function custom(){
    //появление и скрытие футера при скроле
    scroll_to_foter = function(item,e){
        if(e.originalEvent.wheelDelta /120 > 0 && $(window).scrollTop()==0) {
            item.slick('slickPrev')
            if(item.slick('slickCurrentSlide')+1 != item.slick("getSlick").slideCount){
                $(".footer").css('display','none');
                $('body').css('overflow','hidden')
            }
        }
        else{
            if(item.slick('slickCurrentSlide')+1 != item.slick("getSlick").slideCount){
                item.slick('slickNext')
                $(".footer").css('display','none');
                $('body').css('overflow','hidden')
            }
            else{
                $(".footer").css('display','flex');
                $('body').css('overflow','visible')
            }
        }
    }
    scroll_to_foter_d = function(item,delta){
        if(delta > 0 && $(window).scrollTop()==0) {
            item.slick('slickPrev')
            if(item.slick('slickCurrentSlide')+1 != item.slick("getSlick").slideCount){
                $(".footer").css('display','none');
                $('body').css('overflow','hidden')
            }
        }
        else{
            if(item.slick('slickCurrentSlide')+1 != item.slick("getSlick").slideCount){
                item.slick('slickNext')
                $(".footer").css('display','none');
                $('body').css('overflow','hidden')
            }
            else{
                $(".footer").css('display','flex');
                $('body').css('overflow','visible')
            }
        }
    }


    function addHandler(object, event, handler) {
        if (object.addEventListener) {
          object.addEventListener(event, handler, false);
        }
        else if (object.attachEvent) {
          object.attachEvent('on' + event, handler);
        }
      }
      addHandler(window, 'DOMMouseScroll', wheel);
      /* addHandler(window, 'mousewheel', wheel);
      addHandler(document, 'mousewheel', wheel); */

      
      var product_catalog_slider_hover = false;
      var main_slider_hover = false;


      function wheel(event) {
        var delta; // Направление колёсика мыши
        event = event || window.event;
        if (event.wheelDelta) { // В Opera и IE
          delta = event.wheelDelta / 120;
          if (window.opera) delta = -delta; // Дополнительно для Opera
        }
        else if (event.detail) { // Для Gecko
          delta = -event.detail / 3;
        }
        //if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
        if(main_slider_hover){
            scroll_to_foter_d($('#main_slider'),delta)
        }
        if(product_catalog_slider_hover){
            scroll_to_foter_d($('.product_catalog .slider'),delta)
            $('.product_catalog ul.sidebar li').removeClass('active');
            for(i = 0; i< $('.product_catalog .slider .item').lenght ;i++){
                if(height < $('.product_catalog .slider .item .content').eq(i).height()){
                    height = $('.product_catalog .slider .item .content').eq(i).height();
                }
            }
            //$('.product_catalog .slider .slick-list').css('min-height',height)
            $('.product_catalog ul.sidebar li').eq($('.product_catalog .slider').slick('slickCurrentSlide')).addClass('active');
            $('.product_catalog .slider .item').height(height)
            $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
        }
        
      }
      $('#main_slider').bind('mousewheel',function(e){
        scroll_to_foter($(this),e)
      })
      $('.product_catalog').bind('mousewheel',function(e){
            scroll_to_foter($(this).find('.slider'),e)
            $('.product_catalog ul.sidebar li').removeClass('active');
            for(i = 0; i< $('.product_catalog .slider .item').lenght ;i++){
                if(height < $('.product_catalog .slider .item .content').eq(i).height()){
                    height = $('.product_catalog .slider .item .content').eq(i).height();
                }
            }
            //$('.product_catalog .slider .slick-list').css('min-height',height)
            $('.product_catalog ul.sidebar li').eq($('.product_catalog .slider').slick('slickCurrentSlide')).addClass('active');
            $('.product_catalog .slider .item').height(height)
            $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
      })
      $('#main_slider').mouseenter(function(e){
        main_slider_hover = true;
      });
      $('#main_slider').mousemove(function(e){
        main_slider_hover = true;
      });
      $('#main_slider').mouseleave(function(e){
        main_slider_hover = false;
      });
      
      $('.product_catalog .slider').mousemove(function(e){
        product_catalog_slider_hover = true;
      });
      $('.product_catalog .slider').mouseenter(function(e){
        product_catalog_slider_hover = true;
      });
      $('.product_catalog .slider').mouseleave(function(e){
        product_catalog_slider_hover = false;
      });
    //появление и скрытие футера при скроле


    $('#menu_opened').click(function(event){
        event.preventDefault()
        $(this).toggleClass('opened');
        $(".menu-hidden").toggleClass('hide');
        $(".menu-hidden").css('visibility','visible')
    })



    //аккардион в вакансиях
    $('.reach.vacancy .row:odd').css('background','white');
    $('.reach.vacancy .hide_vacancy').hide();
    $('.reach.vacancy .hide_vacancy').eq(1).show();
    $('.reach.vacancy .row').click(function(){
        index = $('.reach.vacancy .row').index(this)
        if($(this).hasClass('active')){
            $('.reach.vacancy .hide_vacancy').eq(index).hide(500);
        }
        else{
            $('.reach.vacancy .hide_vacancy').eq(index).show(500);
        }
        $(this).toggleClass('active')
    })
    //аккардион в вакансиях


    //аккардион в каталоге
    $('.catalog .sidebar .category ul').hide()
    $('.catalog .sidebar .category ul').eq(0).show()
    var list_opening = false;
    $('.catalog .sidebar .category > li > a').click(function(e){
        e.preventDefault();
        if(!list_opening){
            
            index = $(this).parent().index()
            if(!$(this).parent().hasClass('open')){
                $(this).parent().addClass('open')
                $(this).parent().children('ul').show(500);
            }
            else{
                $(this).parent().removeClass('open')
                $(this).parent().children('ul').hide(500);
            }
            list_opening = true;
        }
        setTimeout(() => {
            list_opening = false
        }, 500);
        
    })
    //аккардион в каталоге

    //поле поиска в хедере
    $('.header .center .search input').focus(function(){
        $('.header .center .search').addClass('active');
    })
    $('.header .center .search input').focusout(function(){
        $('.header .center .search').removeClass('active');
    })
    //поле поиска в хедере



    //фиксация года в истории
    $(window).scroll(function(){
        var year = $('.reach.history .section .left h2')
        var section = $('.reach.history .section')
        for(i = 0;i< year.length;i++){
            if(100 + $(this).scrollTop() >= section.eq(i).offset().top && $(this).scrollTop() + 250 < section.eq(i).offset().top + section.eq(i).height()){
                year.eq(i).css('top',100+$(this).scrollTop()-section.eq(i).offset().top)
            }
        }
    })
    //фиксация года в истории



    //popups

    $('a.js-popup').click(function(){
        if($(this).attr('href') != '' && $('.blackhole').find($(this).attr('href')).length>0){
            $('.blackhole').addClass('active')
            $('.blackhole').find($(this).attr('href')).addClass('active')
            console.log($(this).attr('href')) 
        }
        
    })
    $('.blackhole .popup-item .close_but').click(function(){
        $('.blackhole').removeClass('active')
        $('.blackhole .popup-item').removeClass('active')
    })


    //popups
    if($(window).width>950){
        //движение изоражений при движении мыши
        $('body').on("mousemove",function(e){
            x = e.screenX
            y = e.screenY
            k = 0.8;
            items = [$('.reach_header img'),
                    $('.product_catalog .slider .item.slick-active .row + .row .col img'),
                    $('.main_slider .block .item .section.slider_one .slide img'),
                    $('.env_slider > img'),
                    $('.documents > img'),
                    $('.main_slider .block .item .section.four .slider .item img')];
            for(i = 0;i< items.length;i++){
                items[i].css('transform','scale(1.1)')
                //items[i].css('transform-origin','left top')
                x_cor = items[i].width()/20*x/$(this).width();
                y_cor = items[i].height()/20*y/$(this).height();
                items[i].css('top',-y_cor*k)
                items[i].css('left',-x_cor*k)
            }
        })
        //движение изоражений при движении мыши
    }
    

    //кастомный select
    $(document).on('click','.dropdown-wrapper .value',function(){
        $(this).parent().toggleClass('active')
    })
    $('body').click(function(){
        if($('.dropdown-wrapper.active').length>0){
            for(var i = 0;i<$('.dropdown-wrapper').length;i++){
                if ($('.dropdown-wrapper').eq(i).is(':hover')){
    
                }
                else if($('.dropdown-wrapper').eq(i).hasClass('active')){
                    $('.dropdown-wrapper').eq(i).removeClass('active')
                }
            }
        }
        
    })
    $(document).on('click','.dropdown-wrapper .list li',function(){
        $(this).parent().parent().find('input').val($(this).text())
        $(this).parent().parent().find('input').change()
        $(this).parent().parent().find('.value').text($(this).text())
        $(this).parent().find('li').removeClass('checked')
        $(this).addClass('checked')
        $(this).parent().parent().toggleClass('active')
    })

    //кастомный select



    //слайдер на детальной странице в Уч. центре вкладка об уч. центре
    $('.training .about .methods .block_r .right img').fadeOut(0)
    $('.training .about .methods ul').fadeOut(0)
    $('.training .about .methods .block_r .right img').eq(0).fadeIn(500)
    $('.training .about .methods ul').eq(0).fadeIn(500)
    $('.training .about .methods .block_r .col').click(function(){
        if(!$(this).hasClass('active')){
            $('.training .about .methods .block_r .col').removeClass('active');
            $(this).addClass('active');
            index = $('.training .about .methods .block_r .col').index(this)
            $('.training .about .methods .block_r .right img').fadeOut(500)
            $('.training .about .methods .block_r .right img').eq(index).delay(500).fadeIn(500)
            $('.training .about .methods ul').hide(500)
            $('.training .about .methods ul').eq(index).delay(500).show(500)
        }
    })
    //слайдер на детальной странице в Уч. центре вкладка об уч. центре



    //стили для эллементов списка при поиске
    for(i=0;i<$('.search_page .list .item').length/2;i++){
        $('.search_page .list .item').eq(i*2).addClass('gray');
    }
    //стили для эллементов списка при поиске

    var move_list = false,
    start_X = 0,
    has_moving = false;
    $('.reach_header ul li a').click(function(e){
        if($(this).data('href') && !has_moving){
            window.history.pushState('forward', null, location.href);
            document.location.replace($(this).data('href'));
        }
        if(has_moving){
            has_moving = false;
            console.log('ыыыы')
            return false;
        }
    })

    //крутящееся меню в REACH
    if($(window).width()<950){
        $('.reach_header ul').mousedown(function(e){
        move_list = true;
        var left = 0;
        if($(this).css('left')!=0 ){
            left = $(this).css('left').replace('px','')
        }
        start_X = e.screenX - Number(left);
        })
        

        $('.reach_header').mouseleave(function(){
            move_list =false;
            has_moving = false;
        })
       


        $('body').mouseup(function(){
            move_list =false
        })
        


        $('.reach_header').mousemove(function(e){
            if(move_list && start_X != 0){
                has_moving = true;
                var x = e.screenX
                e.preventDefault;
                length_li = 0
                for(i=0;i<$(this).find('ul').children('li').length;i++){
                    length_li +=$(this).find('ul').children('li').eq(i).width()+45;
                }
                if((-start_X + x)<=0 && (-start_X + x)>(-length_li+$(this).find('ul').width())){
                    $(this).find('ul').attr('style','left:'+(-start_X + x)+'px')
                }
            }
        })
        $(".reach_header ul").swipe({
            swipe:function(event, direction, distance, duration, fingerCount) {
                console.log('swipe')
                console.log(distance)
                console.log(direction)
                if(direction == 'right'){
                    var x = distance*2
                }
                else if(direction == 'left'){
                    var x = - distance*2
                }
                    length_li = 0
                    var left = 0;
                    if($(this).css('left')!=0 ){
                        left = $(this).css('left').replace('px','')
                    }
                    start_X = - Number(left);

                    for(i=0;i<$(this).children('li').length;i++){
                        length_li +=$(this).children('li').eq(i).width()+45;
                    }
                    if((-start_X + x)<=0 && (-start_X + x)>(-length_li+$(this).width())){
                        //$(this).attr('style','left:'+(start_X + x)+'px')
                        $( this ).animate( { left: +(-start_X + x)+'px' }, 500)
                    }
                    if((-start_X + x)>0){
                        $( this ).animate( { left: 0+'px' }, 500)
                    }
                    if((-start_X + x)<(-length_li+$(this).width())){
                        $( this ).animate( { left: (-length_li+$(this).width())+'px' }, 500)
                    }
                
            }
          });
    }
    //крутящееся меню в REACH


    $('.trigger_list .trigger').click(function(){
        if(!$(this).hasClass('active') && !$(this).hasClass('disabled')){
            $(this).parent().find('.trigger').removeClass('active');
            $(this).addClass('active').trigger('classChange');
        }
    })
    $('.catalog .content .sidebar .all').click(function(){
        if($(window).width()>990){
            $('.catalog .content .sidebar .section_list').toggleClass('active')
        }
        else{
            $('.catalog .content .sidebar .adaptive_popup').toggleClass('active')
        }
    })
}
function maps(){
    ymaps.ready(function(){
        if($('#contactsMap').length>0){
            contactsMap_init();
        }
        if($('#deliveryMap').length>0){
            deliveryMap_init();
        }
    });
    function contactsMap_init(){
        type_objects = {
            'plants': new ymaps.GeoObjectCollection(null, {preset: 'islands#yellowIcon'}),
            'representation': new ymaps.GeoObjectCollection(null, {preset: 'islands#yellowIcon'}),
            'materials': new ymaps.GeoObjectCollection(null, {preset: 'islands#yellowIcon'})
        }
        data_location = {
            'Россия':{
                'Тульская область':{
                    'plants':{
                        1: [54.088921, 38.256023],
                    },
                    'representation':{
                        1: [56.684758,37.738521],
                    },
                    'materials':{
                        1: [56.684758,37.738521],
                    }
                },
                'другая область':{
                    'plants':{
                        1: [54.088921, 38.256023],
                    },
                    'representation':{
                        1: [56.684758,37.738521],
                    },
                    'materials':{
                        1: [56.684758,37.738521],
                    }
                },
                'Московская область':{
                    'plants':{
                        1: [55.904758,37.108521],
                        2: [51.904758,38.108521]
                    },
                    'representation':{
                        1: [56.004758,37.788521],
                        2: [51.904758,38.108521]
                    },
                    'materials':{
                        1: [56.004758,39.758521],
                        2: [51.904758,38.108521]
                    }
                }
            },
            'Казахстан':{
                'Алматинская область':{
                    'representation':{
                        1: [56.004758,50.788521],
                    }
                },
                'Костанайская область':{
                    'representation':{
                        1: [58.004758,50.888521],
                    },
                    'materials':{
                        1: [58.004758,50.788521],
                        2: [58.004758,52.788521]
                    }
                }
            }
        }

        var active_type = 'plants';
        var contactsMap = new ymaps.Map("contactsMap", {
            center: [55.76, 37.64],
            zoom: 5,
            controls:['zoomControl']
        },{
            minZoom: 5,
            maxZoom: 17,
        });
        contactsMap.behaviors.disable('scrollZoom')


        var show_inf = true; // включение вывода в консоль отладочной информации
        var correction_active_type = function(){
            var country_name = $('.map_zavods .filter .country input').val(),
            region_name = $('.map_zavods .filter .region input').val()
            var find = false;
            var empty_types = {
                'plants': false,
                'representation': false,
                'materials': false
            }
            var index = 0,
            correct_index = 0,
            new_type;
            for(type in data_location[country_name][region_name]){
                var error = true;
                if(Object.keys(data_location[country_name][region_name][type]).length>0){
                    error = false;
                    if(show_inf){
                        console.log('Точек в типе: ' +type+ ' найдено :'+Object.keys(data_location[country_name][region_name][type]).length+'шт')
                    }
                    
                    if(type == 'plants'){
                        if(show_inf){
                            console.log('новый индекс '+ 0)
                        }
                        index = 0
                    }
                    if(type == 'representation'){
                        if(show_inf){
                            console.log('новый индекс '+ 1)
                        }
                        index = 1
                    }
                    if(type == 'materials'){
                        if(show_inf){
                            console.log('новый индекс '+ 2)
                        }
                        index = 2
                    }
                }
                else{
                    if(show_inf){
                        console.log('Точек в типе: ' +type+ ' нет')
                    }
                }
                if(type == active_type && !error){
                    return index;
                }
                if(error){
                    empty_types[type] = true
                    $('.map_zavods .content ul.type_placemarks').find('#'+type).addClass('disabled');
                }
                else{
                    new_type = type;
                    correct_index = index
                    find = true;
                }
            }
            active_type = new_type
            if(!find ){
                if(show_inf){
                    console.log('Точек в стране не найдено')
                }
                return false;
            }
            else{
                if(show_inf){
                    console.log('Найдена точка в типе с индексом: '+correct_index)
                }
                return correct_index;
            }
            
        }



        var filter_objects = function(){
            var country_name = $('.map_zavods .filter .country input').val(),
            region_name = $('.map_zavods .filter .region input').val()
            contactsMap.geoObjects.removeAll()
            if(show_inf){
                console.log('*****начало фильтрации*****')
            }
            
            var need_correction_in_type = false;
            for(type in data_location[country_name][region_name]){
                var error = true;
                for(i in data_location[country_name][region_name][type]){
                    error = false;
                    ''
                }
                if(error){
                    $('.map_zavods .content ul.type_placemarks').find('#'+type).addClass('disabled');
                }
            }
            for(region in data_location[country_name]){
                for(type in type_objects){
                    if(data_location[country_name][region][type]){
                        type_objects[type].splice(0,Object.keys(data_location[country_name][region][type]).length)
                    }
                }
            }
            for(type in type_objects){
                if(!data_location[country_name][region_name][type]){
                    $('.map_zavods .content ul.type_placemarks').find('#'+type).addClass('disabled');
                    if(show_inf){
                        console.log('в категории '+type+" нет точек")
                    }
                    
                }
            }
            var error = true;
            if(data_location[country_name][region_name][active_type]){
                
                if(show_inf){
                    console.log('ошибок в данных нет')
                }
                error = false
                for(var i in data_location[country_name][region_name][active_type]){
                    if(show_inf){
                        console.log('вывелась '+i+'я метка')
                    }
                    type_objects[active_type].add(new ymaps.Placemark(data_location[country_name][region_name][active_type][i],{
                        id: i
                    },{
                        iconLayout: 'default#image',
                        iconImageHref: 'new_styles/img/icon_map.png',
                        iconImageSize: [44, 50],
                        iconImageOffset: [-23, -50],
                        iconContentOffset: [0, 0],
                    }))
                }
            }
            if(error){
                need_correction_in_type = true;
                if(show_inf){
                    console.log('нужна корректировка')
                }
            }
            $('.map_zavods .block.active .item').removeClass('active')
            for(var index=0;index<$('.map_zavods .block.active .item').length;index++){
                if($('.map_zavods .block.active .item').eq(index).data('region')==region_name 
                && $('.map_zavods .block.active .item').eq(index).data('country')==country_name){
                    $('.map_zavods .block.active .item').eq(index).addClass('active')
                }
            }
            contactsMap.geoObjects.add(type_objects[active_type])
            if(need_correction_in_type){
                if(show_inf){
                    console.log('-----------начало функции корректировки-----------')
                    console.log(' ')
                }
                var new_index = correction_active_type()
                if(show_inf){
                    console.log('-----------конец функции корректировки-----------')
                    console.log(' ')
                }
                $('.map_zavods .content ul.type_placemarks li').eq(new_index).click()
            }
            else{
                if(show_inf){
                    console.log('*****конец фильтрации*****')
                    console.log(' ')
                }
            }
            return true;
        }
        filter_objects();

        $('.map_zavods .filter .col input').change(function(){
            $('.map_zavods .content ul.type_placemarks li').removeClass('disabled')
            if($(this).attr('id')=='country'){
                var iteration = 0;
                $('.map_zavods .filter .region ul.list li').remove();
                for(var region in data_location[$(this).val()]){
                    if(iteration==0){
                        $('.map_zavods .filter .region .value').text(region)
                        $('.map_zavods .filter .region input').val(region)
                        $('.map_zavods .filter .region ul.list').append('<li>');
                        $('.map_zavods .filter .region ul.list li').eq(iteration).text(region)
                        $('.map_zavods .filter .region ul.list li').eq(iteration).addClass('checked')
                    }
                    else{
                        $('.map_zavods .filter .region ul.list').append('<li>');
                        $('.map_zavods .filter .region ul.list li').eq(iteration).text(region);
                        $('.map_zavods .filter .region ul.list li').eq(iteration).attr('style','')
                    }
                    iteration ++;
                }
            }
            
            if(filter_objects()){
                contactsMap.geoObjects.removeAll()
                contactsMap.geoObjects.add(type_objects[$('.map_zavods .content ul.type_placemarks li.active').attr("id")])
                contactsMap.setBounds(type_objects[$('.map_zavods .content ul.type_placemarks li.active').attr("id")].getBounds(),{checkZoomRange: true,duration: 1000});
            }
        })


        show_item_in_sidebar = function(id){
            var scrollbar_top = 0;
            for(i = 0;i<id-1;i++){
                scrollbar_top += $('.map_zavods .sidebar .block.active .item').eq(i).height()+20;
            }
            $('.map_zavods .sidebar .block.active').animate({
                scrollTop: scrollbar_top
            },500)
            
        }

        for(var type in type_objects){
            type_objects[type].events.add("click", function (e) {
                var placemark = e.get('target');
                show_item_in_sidebar(placemark.properties.get('id'))
                });
        }
        $('.map_zavods .content ul.type_placemarks li').click(function(e){
            if(!$(this).hasClass('disabled')){
                $('.map_zavods .sidebar .block').removeClass('active')
                $('.map_zavods .sidebar').find('#'+$(this).attr("id")+'_block').addClass('active')
                active_type = $(this).attr("id")
                if(filter_objects()){
                    contactsMap.geoObjects.removeAll()
                    contactsMap.geoObjects.add(type_objects[active_type])
                    contactsMap.setBounds(type_objects[active_type].getBounds(),{checkZoomRange: true,duration: 1000});
                }
            }
        })
    }
    function deliveryMap_init(){
        RU_regions = {
            region: {
                'RU-BRY': 'Брянская область',
                'RU-LIP': 'Липецкая область',
                'RU-ORL': 'Орловская область',
                'RU-RYA': 'Рязанская область',
                'RU-SMO': 'Смоленская область',
                'RU-TAM': 'Тамбовская область',
                'RU-TVE': 'Тверская область',
                'RU-KRY': 'Республика Крым',
                'RU-TUL': 'Тульская область',
                'RU-SVE': 'Свердловская область',
                'RU-KLU': 'Калужская область',
                'RU-ARK': 'Архангельская область'   
            },
            parent_region: 'RU',
            market: 'RU_market'
        },
        SNG_regions = {
            region: {
                'AZ': 'Азербайджан',
                'AM': 'Армения',
                'GE': 'Грузия',
                'UA': 'Украина',
                'MD': 'Молдова'
            },
            parent_region: '001',
            market: 'SNG_market'
        },
        FAR_regions = {
            region: {
                'IT': 'Италия',
                'CN': 'Китай'
            },
            parent_region: '001',
            market: 'FAR_market'
        },
        Markets = {
            'RU_market' :new ymaps.GeoObjectCollection(null, {preset: 'islands#yellowIcon'}),
            'SNG_market':new ymaps.GeoObjectCollection(null, {preset: 'islands#yellowIcon'}),
            'FAR_market':new ymaps.GeoObjectCollection(null, {preset: 'islands#yellowIcon'})
        },
        deliveryMap = new ymaps.Map('deliveryMap',{
            center: [55,37],
            zoom: 4,
            controls:['zoomControl']
        });
        deliveryMap.behaviors.disable('scrollZoom')
        yamaps_border = function(regions_list){
            ymaps.borders.load(regions_list.parent_region, {
                lang: 'ru',
                quality: 0
            }).then(function (result) {
                
                result.features.forEach(function (feature) {
                    var iso = feature.properties.iso3166;
                    feature.id = iso;
                    if (regions_list.region[iso]) {
                        feature.options = {
                            fillMethod: 'tile',
                            fillColor: '#00a0e3',
                            strokeColor: '#ffffff',
                            fillOpacity: 0.8
                        };
                        Markets[regions_list.market].add(new ymaps.GeoObject(feature));
                    }
                    else{
                        feature.options = {
                            fillMethod: 'tile',
                            fillColor: '#ffffff00',
                            strokeColor: '#ffffff00',
                        };
                    }
                });
            })
        }
        yamaps_border(RU_regions)       
        yamaps_border(SNG_regions)       
        yamaps_border(FAR_regions)       
                


        deliveryMap.geoObjects.add(Markets['RU_market']);
        for(var market in Markets){
            
            Markets[market].events.add('mouseenter', function (event) {
                var district = event.get('target');
                district.options.set({fillOpacity: 0.8});
            });
            Markets[market].events.add('mouseleave', function (event) {
                var district = event.get('target');
                    district.options.set({fillOpacity: 1});
            });
        }
        $('.geography .list div').click(function(){
            deliveryMap.geoObjects.removeAll()
            $(this).parent().find('>div').removeClass('active')
            $(this).addClass('active');
            for(var market in Markets){
                if($(this).data('id')==market){
                    deliveryMap.geoObjects.add(Markets[market]);
                    //deliveryMap.setCenter([65,100]);
                    deliveryMap.setBounds(Markets[market].getBounds(), {checkZoomRange: true}); 
                }
            }
        })
        
    }
    
    
    $('#object_map_and_list .trigger').on('classChange',function(){
        var objectsMap
        var data_location = {
            1: [55.684758,37.738521],
            2: [54.684758,38.738521]
        }
        if($(this).hasClass('show_map')){
            $('#objectsMap').addClass('active')
            $(this).parent().parent().find('.objects_list').hide()
            objectsMap = new ymaps.Map("objectsMap", {
                center: [55.76, 37.64],
                zoom: 5,
                controls:['zoomControl']
            });
            objectsMap.behaviors.disable('scrollZoom') 
            for (var i in data_location) {
                objectsMap.geoObjects.add(new ymaps.Placemark(data_location[i],{
                    balloonContentHeader: "Название обьекта",
                    balloonContentBody: "адресс",
                    balloonContentFooter: "доп. инфлрмация",
                    hintContent: "Название обьекта при навелении"
                },{
                    iconLayout: 'default#image',
                    iconImageHref: 'new_styles/img/icon_map.png',
                    iconImageSize: [44, 50],
                    iconImageOffset: [-23, -50],
                    iconContentOffset: [0, 0],
                }))
            }
        }
        else{
            $('#objectsMap').find('ymaps').remove()
            $('#objectsMap').removeClass('active')
            $(this).parent().parent().find('.objects_list').show()
        }
    })
}
function sliders(){
    
    $('#main_slider').slick({
        slidesToShow: 1,
        vertical:true,
        slidesToScroll: 1,
        verticalSwiping : true,
        speed: 1000,
        arrows: false,
        dots : true,
        infinite: false,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                dots : false,
              }
            }
          ]
    })
    $('#main_slider .slider_one').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 600,
        prevArrow: '<div class="left_ar" ></div><p class="num_o">1<span>-4</span></p>',
        nextArrow: '<div class="right_ar" ></div>',
        arrows: true,
        dots : true
    })
    $('#main_slider .four .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 600,
        arrows: false,
        dots : false
    })
    $('#main_slider .six .slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 600,
        arrows: false,
        dots : false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              }
            },
            {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
    })
    $('#main_slider .two .industry_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        fade: true,
        arrows: false,
        swipe: false,
        dots : false,
        infinite: false
    })
    if($(window).width()<991){
        $('.scientific_activity .block .content .row').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 600,
            arrows: false,
            swipe: true,
            dots : false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
        })
    }
    if($(window).width()>950){
        $('.product_catalog .slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 800,
            arrows: false,
            vertical : true,
            cssEase: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
            swipe: false,
            dots : false,
            infinite: false
        })
    }
    else{
        $('.product_catalog .slider').slick('unslick')
    }
    $('.training .about .gray .items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        arrows: false,
        vertical : true,
        swipe: false,
        dots : true,
        infinite: false
    })
    $('.object_header .slider_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        arrows: false,
        swipe: false,
        dots : true,
        infinite: false
    })
    $('.env_respons .env_slider .items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        arrows: false,
        swipe: true,
        dots : false,
        infinite: false
    })

    var summ = 0;
    for(i = 0; i< $('.product_catalog .slider .item').lenght ;i++){
        summ += $('.product_catalog .slider .item').height();
    }
    $('.product_catalog .slider .slick-track').height(summ)
     
    
    //

    //
    

    var product_catalog_slider_animate = false,
    two_catalog_slider_animate = false;

    $('#main_slider .two .list_two li').mousemove(function(){
        if(!two_catalog_slider_animate){
            $('#main_slider .two .industry_slider').slick('slickGoTo', $(this).index());
            $('#main_slider .two .list_two li').removeClass('active')
        }
        $('#main_slider .two .list_two li').removeClass('active');
        $(this).addClass('active');
        setTimeout(() => {
            two_catalog_slider_animate = false;
        }, 300);
        two_catalog_slider_animate = true;
    })
    $('.product_catalog ul.sidebar li').click(function(){
        if(!product_catalog_slider_animate){
            $('.product_catalog ul.sidebar li').removeClass('active');
            $(this).addClass('active');
            $('.product_catalog .slider').slick('slickGoTo', $(this).index());
            height = $('.product_catalog .slider .item').eq(0).height();
            $('.product_catalog .slider .item').height(height)
            $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
            product_catalog_slider_animate = true;
        }
        })

    $('.product_catalog .slider').on('afterChange', function(event, slick, currentSlide){
        product_catalog_slider_animate = false;
    });


    //подключение кнопок к слайдерам
    $('.object_header .right_f').on('click', function() {
        $('.object_header .slider_img').slick('slickNext');
    });
    $('.object_header  .left_f').on('click', function() {
        $('.object_header .slider_img').slick('slickPrev');
    });


    $('#main_slider .four .right_f').on('click', function() {
        $('#main_slider .four .slider').slick('slickNext');
    });
    $('#main_slider .four .left_f').on('click', function() {
        $('#main_slider .four .slider').slick('slickPrev');
    });


    $('#main_slider #industry_slider_controls .right_f').on('click', function() {
        $('#main_slider .two .industry_slider').slick('slickNext');
    });
    $('#main_slider #industry_slider_controls .left_f').on('click', function() {
        $('#main_slider .two .industry_slider').slick('slickPrev');
    });



    $('#main_slider .six .controls .right').on('click', function() {
        $('#main_slider .six .slider').slick('slickNext');
    });
    $('#main_slider .six .controls .left').on('click', function() {
        $('#main_slider .six .slider').slick('slickPrev');
    });


    $('.env_respons .env_slider .controls .right_f').on('click', function() {
        $('.env_respons .env_slider .items').slick('slickNext');
        
    });
    $('.env_respons .env_slider .controls .left_f').on('click', function() {
        $('.env_respons .env_slider .items').slick('slickPrev');
    });
    //подключение кнопок к слайдерам



    //вывод currentslide на странице
    $('.object_header .num').text(1+'/'+$(".object_header .slider_img").slick("getSlick").slideCount);
    $('.object_header .slider_img').on('afterChange', function(event, slick, currentSlide){
        $('.object_header .num').text(currentSlide+1+'/'+$(".object_header .slider_img").slick("getSlick").slideCount);
    });

    $('#main_slider .four .num').text(1+'/'+$("#main_slider .four .slider").slick("getSlick").slideCount);
    $('#main_slider .four .slider').on('afterChange', function(event, slick, currentSlide){
        $('#main_slider .four .num').text(currentSlide+1+'/'+$("#main_slider .four .slider").slick("getSlick").slideCount);
    });

    

    $('#main_slider .two .num').text(1+'/'+$("#main_slider .two .industry_slider").slick("getSlick").slideCount);
    $('#main_slider .two .industry_slider').on('afterChange', function(event, slick, currentSlide){
        two_catalog_slider_animate = false;
        $('#main_slider .two .num').text(currentSlide+1+'/'+$("#main_slider .two .industry_slider").slick("getSlick").slideCount);
    });
    

    $('.env_respons .env_slider .num').text(1+'/'+$(".env_respons .env_slider .items").slick("getSlick").slideCount);
    $('.env_respons .env_slider .items').on('afterChange', function(event, slick, currentSlide){
        $('.env_respons .env_slider .num').text(currentSlide+1+'/'+$(".env_respons .env_slider .items").slick("getSlick").slideCount);
    });


    $('#main_slider .slider_one .num_o').html(1+"<span>"+(-$("#main_slider .slider_one").slick("getSlick").slideCount)+"</span>");
    $('#main_slider .slider_one').on('afterChange', function(event, slick, currentSlide){
        $('#main_slider .slider_one .num_o').html(currentSlide+1+"<span>"+(-$("#main_slider .slider_one").slick("getSlick").slideCount)+"</span>");
    });
    //вывод currentslide на странице


    //смена стилей при переключении слайдов на главной
    {
    $('#main_slider').on('beforeChange',function(event, slick, currentSlide,  nextSlide){
        if(nextSlide==1 || nextSlide==2 || nextSlide==5){
            $('.header').addClass("black");
            $('#main_slider .slick-dots').addClass('black');
        }
        else{
            $('.header').removeClass('black');
            $('#main_slider .slick-dots').removeClass('black');
        }
    })
    $('#main_slider .slider_one').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })
    $('#main_slider .two .industry_slider').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })
    $('#main_slider .four .slider').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })
    $('#main_slider .six .slider').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })
    }
    //смена стилей при переключении слайдов на главной


    size_section();
}
function switching(){
    //сохранение НОМЕРА СЛАЙДА при переходе в каталог продукции
    if(!(sessionStorage['industry_slider_tab']>=0)){
        sessionStorage['industry_slider_tab'] = 0;
    }
    $('.product_catalog ul.sidebar li').eq(sessionStorage['industry_slider_tab']).trigger('click');
    sessionStorage['industry_slider_tab'] = 0;
    $('.section.two .content > a').click(function(e){
        e.preventDefault();
        tab = $('#main_slider .two .industry_slider').slick("getSlick").currentSlide
        sessionStorage['industry_slider_tab'] = tab
        window.history.pushState('forward', null, location.href);
        document.location.replace(($(this).attr('href')))
    })
    //сохранение НОМЕРА СЛАЙДА при переходе в каталог продукции



    //обработка ПЕРЕХОДА на детальную страницу уч. центра
    var training_page_index = 0
    if(!(localStorage['training_page_index']>=0)){
        localStorage['training_page_index'] = 0;
    }
    clear_class = function(){
        $('.training .content').fadeOut(0)
        $('.training .navigation li').removeClass('active');
        $('.reach_header').removeClass('materials courses about active record')
    }
    clear_class();
    var training_center_load = function(){
        clear_class();
        training_page_index = localStorage['training_page_index'];
        $('.training .content').eq(training_page_index).fadeIn(500)
        $('.training .navigation li').eq(training_page_index).addClass('active');
        $('.reach_header .content h1').text($('.training .navigation li').eq(training_page_index).text())
        $('.breadcrumbs p').text($('.training .navigation li').eq(training_page_index).text())
        $('.reach_header').addClass($('.training .content').eq(training_page_index).attr('class').replace('content ',''))
    }
    if($('.training .content').length>0){
        training_center_load();
    }
    //обработка ПЕРЕХОДА на детальную страницу уч. центра


    //переход на детальную страницу в Уч. центре
    $('.training_center .courses a.col').click(function(e){
        e.preventDefault();
        link = $(this).attr('href');
        training_page_index = $(this).index()+1
        window.history.pushState('forward', null, location.href);
        localStorage['training_page_index'] = training_page_index
        document.location.replace((link));
    })
    //переход на детальную страницу в Уч. центре


    //переключение страниц на детальной странице в Уч. центре
    $('.training .navigation li').click(function(){
        if(!$(this).hasClass('active')){
            localStorage['training_page_index'] = $('.training .navigation li').index(this);
            training_center_load();
        }
    })
    //переключение страниц на детальной странице в Уч. центре
}
size_section();