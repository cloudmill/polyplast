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
        var plants_data_location = {
            1: [55.684758,37.738521],
            2: [54.684758,37.738521],
            3: [56.684758,38.738521]
        }
        var representation_data_location = {
            1: [56.684758,37.738521],
            2: [56.684758,39.738521],
            3: [58.684758,38.738521]
        }
        var materials_data_location = {
            1: [57.684758,37.738521],
            2: [57.684758,39.738521],
            3: [54.684758,38.738521]
        }
        plants = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#yellowIcon'
        })
        representation = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#yellowIcon'
        })
        materials = new ymaps.GeoObjectCollection(null, {
            preset: 'islands#yellowIcon'
        })
        var contactsMap = new ymaps.Map("contactsMap", {
            center: [55.76, 37.64],
            zoom: 5,
            controls:['zoomControl']
        });
        contactsMap.behaviors.disable('scrollZoom') 
        for (var i in plants_data_location) {
            plants.add(new ymaps.Placemark(plants_data_location[i],{
                id: i
            },{
                iconLayout: 'default#image',
                iconImageHref: 'new_styles/img/icon_map.png',
                iconImageSize: [44, 50],
                iconImageOffset: [-23, -50],
                iconContentOffset: [0, 0],
            }))
        }
        for (var i in representation_data_location) {
            representation.add(new ymaps.Placemark(representation_data_location[i],{
                id: i
            },{
                iconLayout: 'default#image',
                iconImageHref: 'new_styles/img/icon_map.png',
                iconImageSize: [44, 50],
                iconImageOffset: [-23, -50],
                iconContentOffset: [0, 0],
            }))
        }
        for (var i in materials_data_location) {
            materials.add(new ymaps.Placemark(materials_data_location[i],{
                id: i
            },{
                iconLayout: 'default#image',
                iconImageHref: 'new_styles/img/icon_map.png',
                iconImageSize: [44, 50],
                iconImageOffset: [-23, -50],
                iconContentOffset: [0, 0],
            }))
        }
        show_item_in_sidebar = function(id){
            var scrollbar_top = 0;
            for(i = 0;i<id-1;i++){
                scrollbar_top += $('.map_zavods .sidebar .block.active .item').eq(i).height()+20;
            }
            $('.map_zavods .sidebar .block.active').animate({
                scrollTop: scrollbar_top
            },500)
            
        }
        plants.events.add("click", function (e) {
            var placemark = e.get('target');
            show_item_in_sidebar(placemark.properties.get('id'))
            });
        representation.events.add("click", function (e) {
            var placemark = e.get('target');
            show_item_in_sidebar(placemark.properties.get('id')) 
            });
        materials.events.add("click", function (e) {
            var placemark = e.get('target');
            show_item_in_sidebar(placemark.properties.get('id')) 
        });
        contactsMap.geoObjects.add(plants)//.add(representation).add(materials)
        $('.map_zavods .content ul.type_placemarks li').click(function(){
            $('.map_zavods .sidebar .block').removeClass('active')
            contactsMap.geoObjects.removeAll()
            
            if($(this).attr("id")=="plants"){
                contactsMap.geoObjects.add(plants)
                $('.map_zavods .sidebar .block#plants_block').addClass('active')
            }
            if($(this).attr("id")=="representation"){
                contactsMap.geoObjects.add(representation)
                $('.map_zavods .sidebar .block#representation_block').addClass('active')
            }
            if($(this).attr("id")=="materials"){
                contactsMap.geoObjects.add(materials)
                $('.map_zavods .sidebar .block#materials_block').addClass('active')
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


                // Загрузим регионы.
                ymaps.borders.load(RU_regions.parent_region, {
                    lang: 'ru',
                    quality: 0
                }).then(function (result) {
                    result.features.forEach(function (feature) {
                        var iso = feature.properties.iso3166;
                        feature.id = iso;
                        if (RU_regions.region[iso] == result.name) {
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
                            Markets[RU_regions.market].add(new ymaps.GeoObject(feature));
                        }
                    });
                })
                ymaps.borders.load(SNG_regions.parent_region, {
                    lang: 'ru',
                    quality: 0
                }).then(function (result) {
                    result.features.forEach(function (feature) {
                        var iso = feature.properties.iso3166;
                        feature.id = iso;
                        if (SNG_regions.region[iso] == result.name) {
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
                            Markets[SNG_regions.market].add(new ymaps.GeoObject(feature));
                        }
                    });
                    
                })

                ymaps.borders.load(FAR_regions.parent_region, {
                    lang: 'ru',
                    quality: 0
                }).then(function (result) {
                    result.features.forEach(function (feature) {
                        var iso = feature.properties.iso3166;
                        feature.id = iso;
                        if (FAR_regions.region[iso] == result.name) {
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
                            Markets[FAR_regions.market].add(new ymaps.GeoObject(feature));
                        }
                    });
                    
                })
                 // Загрузим регионы.


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