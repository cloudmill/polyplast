$(document).ready(function(){
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
})