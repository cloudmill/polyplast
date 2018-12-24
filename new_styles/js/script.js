//обнуление классов
var clear_class = function(){
    $('.training .about .methods .block_r .right img').fadeOut(0)
    $('.training .about .methods ul').fadeOut(0)
    $('.training .content').fadeOut(0)
    $('.training .navigation li').removeClass('active');
    $('.reach_header').removeClass('materials courses about active record')
}
clear_class();
//обнуление классов

$(document).ready(function(){
    var height;
    var mian_slider=$('#main_slider').slick({
        slidesToShow: 1,
        vertical:true,
        slidesToScroll: 1,
        verticalSwiping : true,
        speed: 1000,
        arrows: false,
        dots : true,
        infinite: false
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
        dots : false
    })
    $('#main_slider .two .otrsl_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        fade: true,
        arrows: false,
        swipe: false,
        dots : false,
        infinite: false
    })
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
    //появление и скрытие футера при скроле

    $('#main_slider').bind('mousewheel', function(e){
        scroll_to_foter($(this),e)
    });
    $('.product_catalog').bind('mousewheel', function(e){
        scroll_to_foter($('.product_catalog .slider'),e)
        $('.product_catalog ul.sidebar li').removeClass('active');
        height = $('.product_catalog .slider .item').eq(0).height();
        $('.product_catalog ul.sidebar li').eq($('.product_catalog .slider').slick('slickCurrentSlide')).addClass('active');
        $('.product_catalog .slider .item').height(height)
        $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
    });



    $('#main_slider .two .list_two li').click(function(){
        $('#main_slider .two .list_two li').removeClass('active');
        $(this).addClass('active');
        $('#main_slider .two .otrsl_slider').slick('slickGoTo', $(this).index());
    })
    $('.product_catalog ul.sidebar li').click(function(){
        $('.product_catalog ul.sidebar li').removeClass('active');
        $(this).addClass('active');
        $('.product_catalog .slider').slick('slickGoTo', $(this).index());
        height = $('.product_catalog .slider .item').eq(0).height();
        $('.product_catalog .slider .item').height(height)
        $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
    })



    $('#main_slider .four .right_f').on('click', function() {
        $('#main_slider .four .slider').slick('slickNext');
    });
    $('#main_slider .four .left_f').on('click', function() {
        $('#main_slider .four .slider').slick('slickPrev');
    });



    $('#main_slider .six .controls .right').on('click', function() {
        $('#main_slider .six .slider').slick('slickNext');
    });
    $('#main_slider .six .controls .left').on('click', function() {
        $('#main_slider .six .slider').slick('slickPrev');
    });



    $('#main_slider .four .num').text(1+'/'+$("#main_slider .four .slider").slick("getSlick").slideCount);
    $('#main_slider .four .slider').on('afterChange', function(event, slick, currentSlide){
        $('#main_slider .four .num').text(currentSlide+1+'/'+$("#main_slider .four .slider").slick("getSlick").slideCount);
    });

    $('#main_slider .slider_one .num_o').html(1+"<span>"+(-$("#main_slider .slider_one").slick("getSlick").slideCount)+"</span>");
    $('#main_slider .slider_one').on('afterChange', function(event, slick, currentSlide){
        $('#main_slider .slider_one .num_o').html(currentSlide+1+"<span>"+(-$("#main_slider .slider_one").slick("getSlick").slideCount)+"</span>");
    });


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
    $('#main_slider .two .otrsl_slider').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })
    $('#main_slider .four .slider').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })
    $('#main_slider .six .slider').on('beforeChange', function(event, slick, currentIndex, index){
        event.stopPropagation()
    })

    


    $('#menu_opened').click(function(){
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
    
    

    //поле поиска в хедере
    $('.header .center .search input').focus(function(){
        $('.header .center .search').addClass('active');
    })
    $('.header .center .search input').focusout(function(){
        $('.header .center .search').removeClass('active');
    })
    //поле поиска в хедере



    $(window).scroll(function(){
        //фиксация хедера
        top_scroll = 223;
        if($('.reach_header ul').length == 0){
            top_scroll += 70;
        }
        if($(this).scrollTop()<=top_scroll){
            $('.reach_header').css('background-color',("rgba(0,0,0,"+($(this).scrollTop()/top_scroll/2)+")"))
        }
        $('.reach_header h1').css('opacity',1-$(this).scrollTop()/top_scroll)
        if($(this).scrollTop()>=top_scroll){
            $('.reach_header').css('position','fixed');
            $('.reach_header').css('top',((-top_scroll)+"px"));
            $('.reach_header h1').css('color','transparent');
        }
        else{
            $('.reach_header').css('position','absolute');
            $('.reach_header').css('top','0');
            $('.reach_header h1').css('color','white');
        }
        //фиксация хедера
        //---------------
        //фиксация года в истории
        var year = $('.reach.history .section .left h2')
        var section = $('.reach.history .section')
        for(i = 0;i< year.length;i++){
            if(100 + $(this).scrollTop() >= section.eq(i).offset().top && $(this).scrollTop() + 250 < section.eq(i).offset().top + section.eq(i).height()){
                year.eq(i).css('top',100+$(this).scrollTop()-section.eq(i).offset().top)
            }
        }
        //фиксация года в истории
    })


    //обработка перехода на детальную страницу уч. центра
    var training_page = 0
    var training_center_load = function(){
        clear_class();
        for(i = 0; i< location.href.length;i++){
            if(location.href[i] == "="){
                training_page = location.href[i+1]
                break;
            }
            else{ training_page = 0;}
        }
        $('.training .content').eq(training_page).fadeIn(500)
        $('.training .navigation li').eq(training_page).addClass('active');
        $('.reach_header .content h1').text($('.training .navigation li').eq(training_page).text())
        $('.breadcrumbs p').text($('.training .navigation li').eq(training_page).text())
        $('.reach_header').addClass($('.training .content').eq(training_page).attr('class').replace('content ',''))
    }
    if($('.training .content').length>0){
        training_center_load();
    }
    //обработка перехода на детальную страницу уч. центра


    //переход на детальную страницу в Уч. центре
    $('.training_center .courses a.col').click(function(e){
        e.preventDefault();
        link = $(this).attr('href');
        training_page = $(this).index()+1
        window.history.pushState('forward', null, location.href);
        document.location.replace((link+'?training_page='+ training_page));
    })
    //переход на детальную страницу в Уч. центре


    //переключение страниц на детальной странице в Уч. центре
    $('.training .navigation li').click(function(){
        if(!$(this).hasClass('active')){
            /*$('.training .navigation li').removeClass('active');
            $(this).addClass('active');
            index = $('.training .navigation li').index(this)
            $('.training .content').fadeOut(500)
            $('.training .content').eq(index).delay(500).fadeIn(500)
            $('.reach_header .content h1').text($(this).text())
            $('.breadcrumbs p').text($(this).text())
            $('.reach_header').removeClass('materials courses about active record')
            $('.reach_header').addClass($('.training .content').eq(index).attr('class').replace('content ',''))*/
            window.history.pushState('forward', null, location.href);
            link = location.href.replace('#?training_page=0','').replace('#?training_page=1','').replace('#?training_page=2','').replace('#?training_page=3','')
            
            window.location.href = (link+'#?training_page='+  $('.training .navigation li').index(this))
            //document.location.replace((link+'?training_page='+  $('.training .navigation li').index(this)));
        }
    })
    $(window).bind('hashchange', function() {//привязка к истории
        if($('.training').length>0){
            training_center_load();
        }
    });
    //переключение страниц на детальной странице в Уч. центре

    //слайдер на детальной странице в Уч. центре вкладка об уч. центре
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
    
    //Фильтр новостей
    var filter_news = function(){
        var categories = $('.news_page ul.categories li');
        var items = $('.news_page .list .item');
        count = 0;
        if($('.news_page ul.categories li.active').index()==0){
            items.show()
            items.delay(100).addClass('show')
        }
        else{
            count = 0;
            for(i = 0;i< categories.length;i++){
                if(categories.eq(i).hasClass('active')){
                    for(j=0;j<items.length;j++){
                        if(categories.eq(i).children('a').text() == items.eq(j).children('.img').children('p').text()){
                            items.eq(j).delay((count)*100).show()
                            items.eq(j).delay((1+count)*100).addClass('show')
                            count ++;
                        }
                    }
                }
                else{
                    for(j=0;j<items.length;j++){
                        if(categories.eq(i).children('a').text() == items.eq(j).children('.img').children('p').text()){
                            items.eq(j).removeClass('show')
                            items.eq(j).delay(100).hide()
                        }
                    }
                }
            }
        }
    }
    $('.news_page ul.categories li').click(function(){
        if($(this).attr('class') != 'active'){
            $('.news_page ul.categories li:first-child').removeClass('active');
            $(this).addClass('active');
            index = $('.news_page ul.categories li').index(this)

            if(($('.news_page ul.categories li.active').length == ($('.news_page ul.categories li').length - 1))||$(this).index()==0){
                $('.news_page ul.categories li').removeClass('active');
                $('.news_page ul.categories li:first-child').addClass('active');
            }
            filter_news();
        }
        else{
            event.preventDefault();
        }
        
    })
    $('.news_page ul.categories li a .close').click(function(){
        event.preventDefault();
        index = $(this).parent().parent().removeClass('active');
        if(($('.news_page ul.categories li.active').length == 0)){
            $('.news_page ul.categories li:first-child').addClass('active'); 
        }
        filter_news();
        return false;
    })
    //Фильтр новостей

    

    //движение изоражений при движении мыши
    $('body').on("mousemove",function(e){
        x = e.screenX
        y = e.screenY
        k = 0.8;
        items = [$('.reach_header img'),
                $('.product_catalog .slider .item.slick-active .row + .row .col img'),
                $('.main_slider .block .item .section.slider_one .slide img'),
                $('.main_slider .block .item .section.four .slider .item img')];
        for(i = 0;i< items.length;i++){
            items[i].css('transform','scale(1.1)')
            items[i].css('transform-origin','left top')
            x_cor = items[i].width()/20*x/$(this).width();
            y_cor = items[i].height()/20*y/$(this).height();
            items[i].css('top',-y_cor*k)
            items[i].css('left',-x_cor*k)
        }
    })
    //движение изоражений при движении мыши

    //корректировка размеров 
    var size_section = function(){
        var m_left,width
        
        if($('#main_slider .slider_one .content').length>0){
            m_left = $('#main_slider .slider_one .content').offset().left;
            width =  Number($('#main_slider .slider_one .content').css('width').replace("px",''));
        }
        var height = $(window).height();
        $('#main_slider').css('height',height);
        $('.main_slider').css('height',height);
        $('#main_slider .slick-list').css('height',height);
        $('#main_slider .slick-list .section').css('height',height);
            
        $('.over_line').css('height',height+"px");
        $('.over_line.two').css('left',m_left+"px");
        $('.over_line.three').css('left',m_left+197.6+"px");
        $('.over_line.four').css('left',m_left+197.3*2+"px");
        $('.over_line.five').css('right',m_left+"px");

        $('#main_slider .two .content').css('width',m_left+width+'px');

        $('#main_slider .three .content').css('width',width+'px');
        $('#main_slider .three .content').css('margin-left',m_left/2+'px');
        $('#main_slider .three .content').css('padding-left',m_left/2+'px');

        $('#main_slider .five .content').css('width',width+m_left-70+'px');

        $('#main_slider .six .content').css('width',width+'px');
        $('#main_slider .six .content').css('margin-left',m_left/2+'px');
        $('#main_slider .six .content').css('padding-left',m_left/2+'px');
        $('#main_slider .six .content .container').css('width',width+m_left+'px');
        $('#main_slider .six .content .container').css('left',m_left/2+'px');
        $('#main_slider .six .content .container .slider').css('width',width+'px');
    }
    //корректировка размеров
    size_section();
    $(window).on('resize',function(){
        size_section();
    })
})