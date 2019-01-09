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
    
    $('#main_slider').slick({
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
    $('#main_slider .two .industry_slider').slick({
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
        $('#main_slider .two .industry_slider').slick('slickGoTo', $(this).index());
    })
    $('.product_catalog ul.sidebar li').click(function(){
        $('.product_catalog ul.sidebar li').removeClass('active');
        $(this).addClass('active');
        $('.product_catalog .slider').slick('slickGoTo', $(this).index());
        height = $('.product_catalog .slider .item').eq(0).height();
        $('.product_catalog .slider .item').height(height)
        $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
    })



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



    $('.object_header .num').text(1+'/'+$(".object_header .slider_img").slick("getSlick").slideCount);
    $('.object_header .slider_img').on('afterChange', function(event, slick, currentSlide){
        $('.object_header .num').text(currentSlide+1+'/'+$(".object_header .slider_img").slick("getSlick").slideCount);
    });

    $('#main_slider .four .num').text(1+'/'+$("#main_slider .four .slider").slick("getSlick").slideCount);
    $('#main_slider .four .slider').on('afterChange', function(event, slick, currentSlide){
        $('#main_slider .four .num').text(currentSlide+1+'/'+$("#main_slider .four .slider").slick("getSlick").slideCount);
    });


    $('.env_respons .env_slider .num').text(1+'/'+$(".env_respons .env_slider .items").slick("getSlick").slideCount);
    $('.env_respons .env_slider .items').on('afterChange', function(event, slick, currentSlide){
        $('.env_respons .env_slider .num').text(currentSlide+1+'/'+$(".env_respons .env_slider .items").slick("getSlick").slideCount);
    });


    $('#main_slider .slider_one .num_o').html(1+"<span>"+(-$("#main_slider .slider_one").slick("getSlick").slideCount)+"</span>");
    $('#main_slider .slider_one').on('afterChange', function(event, slick, currentSlide){
        $('#main_slider .slider_one .num_o').html(currentSlide+1+"<span>"+(-$("#main_slider .slider_one").slick("getSlick").slideCount)+"</span>");
    });
    
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
    
    //аккардион в каталоге
    $('.catalog .sidebar .category ul').hide()
    $('.catalog .sidebar .category ul').eq(0).show()
    $('.catalog .sidebar .category > li > a').click(function(e){
        e.preventDefault();
        index = $(this).parent().index()
        if(!$(this).parent().hasClass('open')){
            $(this).parent().addClass('open')
            $(this).parent().children('ul').show(500);
        }
        else{
            $(this).parent().removeClass('open')
            $(this).parent().children('ul').hide(500);
        }
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



    $(window).scroll(function(){
        //фиксация хедера
        /*top_scroll = 223;
        if($('.reach_header ul').length == 0){
            top_scroll += 70;
        }
        if($('.reach_header').hasClass('scientific')){
            top_scroll += 480;
        }
        if($(this).scrollTop()<=top_scroll){
            $('.reach_header').css('background-color',("rgba(0,0,0,"+($(this).scrollTop()/top_scroll/2)+")"))
        }
        items = [$('.reach_header h1'),$('.scientific_activity .block')]
        for(i = 0;i<items.length;i++){
            if(items[i].length>=1){
                items[i].css('opacity',1-$(this).scrollTop()/(items[i].offset().top+items[i].height()))
            }
        }
        if($(this).scrollTop()>=top_scroll){
            $('.reach_header').css('position','fixed');
            $('.reach_header').css('top',((-top_scroll)+"px"));
            $('.reach_header h1').css('color','transparent');
        }
        else{
            $('.reach_header').css('position','absolute');
            $('.reach_header').css('top','0');
            $('.reach_header h1').css('color','white');
        }*/
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
    
    //Фильтр новостей и статей
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
    
    $('.news_page .block .object ul.categories li').click(function(){
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
            console.log(index)
            filter_news($('.scientific_article ul.categories li'),$('.scientific_article .items .item'));
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
    //Фильтр новостей и статей



    

    //движение изоражений при движении мыши
    $('body').on("mousemove",function(e){
        x = e.screenX
        y = e.screenY
        k = 0.8;
        items = [$('.reach_header img'),
                $('.product_catalog .slider .item.slick-active .row + .row .col img'),
                $('.main_slider .block .item .section.slider_one .slide img'),
                $('.env_slider > img'),
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

    //корректировка размеров
    var height,m_left,width;

    var size_section = function(){
        if($('#main_slider .slider_one .content').length>0){
            m_left = $('#main_slider .slider_one .content').offset().left;
            width =  Number($('#main_slider .slider_one .content').css('width').replace("px",''));
        }
        height = $(window).height();
        $('.page_404').css('height',height);
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