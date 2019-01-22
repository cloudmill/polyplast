$(document).ready(function(){
    
    ymaps.ready(function(){
        if($('.contacts').length>0){
            contactsMap_init();
        }
    });
    function contactsMap_init(){
        var data_location = {
            1: [55.684758,37.738521],
            2: [54.684758,38.738521]
        }
        var contactsMap = new ymaps.Map("contactsMap", {
            center: [55.76, 37.64],
            zoom: 5,
            controls:['zoomControl']
        });
        contactsMap.behaviors.disable('scrollZoom') 
        for (var i in data_location) {
            contactsMap.geoObjects.add(new ymaps.Placemark(data_location[i],{
            },{
                iconLayout: 'default#image',
                iconImageHref: 'new_styles/img/icon_map.png',
                iconImageSize: [44, 50],
                iconImageOffset: [-23, -50],
                iconContentOffset: [0, 0],
            }))
        }
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