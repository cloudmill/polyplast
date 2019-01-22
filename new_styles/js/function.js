$(document).ready(function(){
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

    //кастомный select
    $('.dropdown-wrapper .value').click(function(){
        $(this).parent().toggleClass('active')
    })
    $('body').click(function(){
        for(var i in $('.dropdown-wrapper')){
            if ($('.dropdown-wrapper').eq(i).is(':hover')){

            }
            else if($('.dropdown-wrapper').eq(i).hasClass('active')){
                $('.dropdown-wrapper').eq(i).removeClass('active')
            }
        }
    })
    $('.dropdown-wrapper .list li').click(function(){
        $(this).parent().parent().find('input').val($(this).text())
        $(this).parent().parent().find('.value').text($(this).text())
        $(this).parent().find('li').removeClass('checked')
        $(this).addClass('checked')
        $(this).parent().parent().toggleClass('active')
    })

    //кастомный select



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



    //стили для эллементов списка при поиске
    for(i=0;i<$('.search_page .list .item').length/2;i++){
        $('.search_page .list .item').eq(i*2).addClass('gray');
    }
    //стили для эллементов списка при поиске






    $('.trigger_list .trigger').click(function(){
        if(!$(this).hasClass('active')){
            $(this).parent().find('.trigger').removeClass('active');
            $(this).addClass('active').trigger('classChange');
        }
    })

    
})





