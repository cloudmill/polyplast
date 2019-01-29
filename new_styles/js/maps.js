$(document).ready(function(){
    
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
                    'plants':{
                    },
                    'representation':{
                        1: [56.004758,50.788521],
                    },
                    'materials':{
                    }
                },
                'Костанайская область':{
                    'plants':{
                        
                    },
                    'representation':{
                        
                    },
                    'materials':{
                        1: [58.004758,50.788521],
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
            console.log(country_name)
            console.log(region_name)
            for(type in data_location[country_name][region_name]){
                var error = true;
                for(i in data_location[country_name][region_name][type]){
                    error = false;
                }
                if(type == active_type && !error){
                    console.log('Все нормас')
                    return index;
                }
                if(error){
                    console.log('ошибка')
                    empty_types[type] = true
                    $('.map_zavods .content ul.type_placemarks').find('#'+type).addClass('disabled');
                }
                else{
                    console.log('не ошибка')
                    new_type = type;
                    correct_index = index
                    find = true;
                }
                index ++
            }
            console.log(new_type)
            console.log(find)
            console.log(correct_index)
            active_type = new_type
            if(!find ){
                return false;
            }
            return correct_index;
        }



        var filter_objects = function(){
            var country_name = $('.map_zavods .filter .country input').val(),
            region_name = $('.map_zavods .filter .region input').val()
            contactsMap.geoObjects.removeAll()
            var need_correction_in_type = false;
            for(region in data_location[country_name]){
                for(type in type_objects){
                    type_objects[type].splice(0,Object.keys(data_location[country_name][region][type]).length)
                }
            }
            
            
            var error = true;
            if(Object.keys(data_location[country_name][region_name][active_type]).length>0){
                for(var i in data_location[country_name][region_name][active_type]){
                    error = false
                    console.log(i)
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
                $('.map_zavods .content ul.type_placemarks li').eq(correction_active_type()).click()
                filter_objects();
                return false;
            }
            return true;
        }
        filter_objects();



        $('.map_zavods .filter .col input').change(function(){
            $('.map_zavods .content ul.type_placemarks li').removeClass('disabled')
            
            
            if($(this).attr('id')=='country'){
                
                var iteration = 0;
                for(var region in data_location[$(this).val()]){
                    if(iteration==0){
                        $('.map_zavods .filter .region ul.list li').removeClass('checked')
                        $('.map_zavods .filter .region .value').text(region)
                        $('.map_zavods .filter .region input').val(region)
                        $('.map_zavods .filter .region ul.list li').eq(iteration).text(region)
                        $('.map_zavods .filter .region ul.list li').eq(iteration).addClass('checked')
                    }
                    else{
                        $('.map_zavods .filter .region ul.list li').eq(iteration).text(region);
                        $('.map_zavods .filter .region ul.list li').eq(iteration).attr('style','')
                    }
                    iteration ++;
                }
                
            }
            correction_active_type()
            
            if(filter_objects()){
                contactsMap.geoObjects.removeAll()
                contactsMap.geoObjects.add(type_objects[$('.map_zavods .content ul.type_placemarks li.active').attr("id")])
                //console.log(type_objects[$('.map_zavods .content ul.type_placemarks li.active').attr("id")])
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
                'RU-KLU': 'Калужская область',
                'RU-LIP': 'Липецкая область',
                'RU-ORL': 'Орловская область',
                'RU-RYA': 'Рязанская область',
                'RU-SMO': 'Смоленская область',
                'RU-TAM': 'Тамбовская область',
                'RU-TVE': 'Тверская область',
                'RU-TUL': 'Тульская область',
                'RU-SVE': 'Свердловская область'
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
                    if (regions_list.region[iso] == result.name) {
                        feature.options = {
                            fillMethod: 'tile',
                            fillColor: '#ffffff00',
                            strokeColor: '#ffffff00'
                        };
                    }
                    else{
                        feature.options = {
                            fillMethod: 'tile',
                            fillColor: '#00a0e3',
                            strokeColor: '#ffffff',
                            fillOpacity: 0.8
                        };
                        Markets[regions_list.market].add(new ymaps.GeoObject(feature));
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
            $(this).parent().parent().find('.objects_list').hide()
            objectsMap = new ymaps.Map("objectsMap", {
                center: [55.76, 37.64],
                zoom: 5,
                controls:['zoomControl']
            });
            objectsMap.behaviors.disable('scrollZoom') 
            for (var i in data_location) {
                objectsMap.geoObjects.add(new ymaps.Placemark(data_location[i],{
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
            $(this).parent().parent().find('.objects_list').show()
        }
    })
})