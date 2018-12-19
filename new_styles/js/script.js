$('.training .content').fadeOut(0)
$('.training .about .methods .block_r .right img').fadeOut(0)
$('.training .about .methods ul').fadeOut(0)
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
        prevArrow: '<img class="left_ar" src="new_styles/img/left_arrow.png" alt=""><p class="num_o">1<span>-4</span></p>',
        nextArrow: '<img class="right_ar" src="new_styles/img/right_arrow.png" alt="">',
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
    $('#main_slider').bind('mousewheel', function(e){
        scroll_to_foter($(this),e)
    });
    
    $('.product_catalog').bind('mousewheel', function(e){
        scroll_to_foter($('.product_catalog .slider'),e)
        $('.product_catalog ul.sidebar li').removeClass('active');
        $('.product_catalog ul.sidebar li').eq($('.product_catalog .slider').slick('slickCurrentSlide')).addClass('active');
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



    if($('#main_slider').length>0){
        $('::-webkit-scrollbar').css('dispaly','none')
    }
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



    $(window).scroll(function(){
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

        
    })

    
    $('.training .content').eq(0).fadeIn(500)

    $('.training .navigation li').click(function(){
        if(!$(this).hasClass('active')){
            $('.training .navigation li').removeClass('active');
            $(this).addClass('active');
            index = $('.training .navigation li').index(this)
            $('.training .content').fadeOut(500)
            $('.training .content').eq(index).delay(500).fadeIn(500)
            $('.reach_header .content h1').text($(this).text())
            el_class = $('.training .content').eq(index).attr('class').replace('content ','')
            $('.reach_header').removeClass('materials courses about active record')
            $('.reach_header').addClass(el_class)
        }
        
        
    })
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
    $('.news_page ul.categories li').click(function(){
        if($(this).attr('class') != 'active'){
            $('.news_page ul.categories li').removeClass('active');
            $(this).addClass('active');
            index = $('.news_page ul.categories li').index(this)
        }
        else{
            event.preventDefault();
        }
    })
    $('.news_page ul.categories li a .close').click(function(){
        event.preventDefault();
        index = $(this).parent().parent().removeClass('active');
        return false
    })



    var size_section = function(){
        m_left = $('#main_slider .slider_one .content').offset().left;
        width =  Number($('#main_slider .slider_one .content').css('width').replace("px",''));
        height = $(window).height();

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
    size_section();
    $(window).on('resize',function(){
        size_section();
    })
})