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
                        1: [58.004758,50.788521],
                    },
                    'materials':{
                    }
                }
            }
        }
        function crds(crd, callback) {
            ymaps.geocode(crd).then(function (res) {
                callback(res.geoObjects.get(0).geometry.getCoordinates());     
            });
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
        var filter_objects = function(triger){
            var country_name = $('.map_zavods .filter .country input').val(),
            region_name;
            contactsMap.geoObjects.removeAll()
            for(var country in data_location){
                if(country_name == country){
                    if(triger=='country'){
                        if(!$('.map_zavods .filter .region ul.list li').hasClass('checked')){
                            $('.map_zavods .filter .region ul.list li').hide();
                        }
                    }
                    var iteration = 0;
                    for(var region in data_location[country]){
                        
                        if(triger=='country'){
                            if(iteration==0){
                                $('.map_zavods .filter .region .value').text(region)
                                $('.map_zavods .filter .region input').val(region)
                                $('.map_zavods .filter .region ul.list li').eq(iteration).text(region)
                            }
                            else{
                                $('.map_zavods .filter .region ul.list li').eq(iteration).text(region)
                                $('.map_zavods .filter .region ul.list li').eq(iteration).show()
                            }
                        }
                        iteration ++;
                        region_name = $('.map_zavods .filter .region input').val()
                        if(region_name == region){
                            for(var type in data_location[country][region]){
                                type_objects[type].splice(0,100)
                                $('.map_zavods .content ul.type_placemarks').find('#'+type).removeClass('disabled')
                                var error = true;
                                for(var i in data_location[country][region][type]){
                                    error = false
                                    
                                    if(data_location[country][region][type][i]){
                                        /* crds(data_location[country][region][type][i], function (coords) {
                                            type_objects[type].add(new ymaps.Placemark(coords,{
                                                id: i
                                            },{
                                                iconLayout: 'default#image',
                                                iconImageHref: 'new_styles/img/icon_map.png',
                                                iconImageSize: [44, 50],
                                                iconImageOffset: [-23, -50],
                                                iconContentOffset: [0, 0],
                                            }))
                                        }); */
                                        type_objects[type].add(new ymaps.Placemark(data_location[country][region][type][i],{
                                            id: i
                                        },{
                                            iconLayout: 'default#image',
                                            iconImageHref: 'new_styles/img/icon_map.png',
                                            iconImageSize: [44, 50],
                                            iconImageOffset: [-23, -50],
                                            iconContentOffset: [0, 0],
                                        }))
                                    }
                                    else{
                                    }
                                }
                                if(error){
                                    $('.map_zavods .content ul.type_placemarks').find('#'+type).addClass('disabled');
                                }
                            }
                        }
                    }
                }
            }
            $('.map_zavods .block.active .item').removeClass('active')
            for(var index=0;index<$('.map_zavods .block.active .item').length;index++){
                if($('.map_zavods .block.active .item').eq(index).data('region')==region_name 
                && $('.map_zavods .block.active .item').eq(index).data('country')==country_name){
                    $('.map_zavods .block.active .item').eq(index).addClass('active')
                }
            }
            contactsMap.geoObjects.add(type_objects[active_type])
        }
        filter_objects();
        $('.map_zavods .filter .col input').change(function(){
            filter_objects($(this).attr('id'));
            contactsMap.setBounds(type_objects[$('.map_zavods .content ul.type_placemarks li.active').attr("id")].getBounds(),{checkZoomRange: true,duration: 1000});
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
                filter_objects()
                contactsMap.geoObjects.removeAll()
                for(var type in type_objects){
                    if($(this).attr("id")==type){
                        active_type = type
                        contactsMap.geoObjects.add(type_objects[type])
                        contactsMap.setBounds(type_objects[type].getBounds(),{checkZoomRange: true,duration: 1000});
                    }
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