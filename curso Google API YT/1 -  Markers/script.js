var map

function initMap() {

    var mapOptions = {
        center: { lat: -3.716816, lng: -38.519115 },
        zoom: 6
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    //adicionar
    //remover
    //marker.setMap(null)
    //animações
    //draggable
    var marker = new google.maps.Marker({ 

        position: { lat: -3.716816, lng: -38.519115 },
        map: map,
        title: 'centro de fortaleza',
        animation: google.maps.Animation.DROP
    })

    map.addListener('click',({latLng})=>{

        let marker = new google.maps.Marker({
            position:latLng,
            map:map,
            animation: google.maps.Animation.DROP
        })

    })


}
