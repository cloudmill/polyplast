//корректировка размеров
var height,m_left,width;
var size_section = function(){
    if($('#main_slider .slider_one .content').length>0){
        m_left = $('#main_slider .slider_one .content').offset().left;
        width =  Number($('#main_slider .slider_one .content').css('width').replace("px",''));
    }
    if($('.rounds').length>0){
        $('.rounds .round_4').height($('.rounds .round_4').width());
    }
    $('.rounds .round_4').height($('.rounds .round_4').width());
    height = $(window).height();
    $('.page_404').css('height',height);
    $('#main_slider').css('height',height);
    $('.blackhole').css('height',height);
    $('.page_test').css('height',height);
    
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
//корректировка размеров


function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

    include('new_styles/js/sliders.js');

    include('new_styles/js/function.js');
    include('new_styles/js/switching.js');

    include('new_styles/js/scrollbar.js');
    include('new_styles/js/filter.js');
    include('new_styles/js/maps.js');

$(document).ready(function(){
    size_section();
    $(window).on('resize',function(){
        size_section();
    })
})