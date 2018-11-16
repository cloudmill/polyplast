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
    $('#main_slider').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
            $('#main_slider').slick('slickPrev')
            if($('#main_slider').slick('slickCurrentSlide')+1 != $('#main_slider').slick("getSlick").slideCount){
                $(".footer").css('display','none');
            }
           
        }
        else{
            if($('#main_slider').slick('slickCurrentSlide')+1 != $('#main_slider').slick("getSlick").slideCount){
                $('#main_slider').slick('slickNext')
                $(".footer").css('display','none');
            }
            else{
                $(".footer").css('display','flex');
            }
        }
    });

    $('#main_slider .two .list_two li').click(function(){
        $('#main_slider .two .list_two li').removeClass('active');
        $(this).addClass('active');
        $('#main_slider .two .otrsl_slider').slick('slickGoTo', $(this).index());
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
        console.log(1);
        
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
    var size_section = function(){
        m_left = $('#main_slider .slider_one .content').offset().left;
        width =  Number($('#main_slider .slider_one .content').css('width').replace("px",''));
        console.log(m_left);
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