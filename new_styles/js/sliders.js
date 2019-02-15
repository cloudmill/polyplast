$(document).ready(function(){

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
        speed: 600,
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

    var product_catalog_slider_animate = false,
    list_two_slider_animate = false;

    $('#main_slider .two .list_two li').click(function(){
        if(!list_two_slider_animate){
            $('#main_slider .two .list_two li').removeClass('active');
            $(this).addClass('active');
            $('#main_slider .two .industry_slider').slick('slickGoTo', $(this).index());
        }
        list_two_slider_animate = true;
    })
    $('.product_catalog ul.sidebar li').click(function(){
        if(!product_catalog_slider_animate){
            $('.product_catalog ul.sidebar li').removeClass('active');
            $(this).addClass('active');
            $('.product_catalog .slider').slick('slickGoTo', $(this).index());
            height = $('.product_catalog .slider .item').eq(0).height();
            $('.product_catalog .slider .item').height(height)
            $('.product_catalog .slider .item.slick-active').height($('.product_catalog .slider .item.slick-active .content').height())
            product_catalog_slider_animate = true
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
        list_two_slider_animate = false;
        $('#main_slider .two .list_two li').removeClass('active')
        $('#main_slider .two .list_two li').eq(currentSlide).addClass('active')
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

})