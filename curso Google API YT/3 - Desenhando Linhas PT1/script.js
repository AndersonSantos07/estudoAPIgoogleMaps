var map

function initMap() {

    var mapOptions = {
        center: { lat: -3.716816, lng: -38.519115 },
        zoom: 6
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions)

    var marker = new google.maps.Marker({ 

        position: { lat: -3.716816, lng: -38.519115 },
        map: map,
        title: 'centro de fortaleza',
        animation: google.maps.Animation.DROP
    })

   let infoWindow = new google.maps.InfoWindow({

    content: '<h2>HELLO WORLD!</h2>',
   // position: { lat: -3.716816, lng: -38.519115 },
   // maxWidth: 200,
   })

   map.addListener('click', ()=>{

    infoWindow.open(map, marker)
    
   })



}
