$(document).ready(function(){
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
})