<<<<<<< HEAD
var map1, map2, map3;
function initialize()
{
    var mapOptions1={
        zoom:2,
        center: {lat: 40.758904, lng: -73.985128}
    };
    var mapOptions2={
        zoom:10,
        center: {lat: 40.758904, lng: -73.985128}
    };
    var mapOptions3={
        zoom:18,
        center: {lat: 40.758904, lng: -73.985128}
    };

    map1=new google.maps.Map(document.getElementById('map_canvas1'),mapOptions1);
    map2=new google.maps.Map(document.getElementById('map_canvas2'),mapOptions2);
    map3=new google.maps.Map(document.getElementById('map_canvas3'),mapOptions3);
    }
    google.maps.event.addDomListener(window, 'load', initialize);


=======
var map1, map2, map3;
function initialize()
{
    var mapOptions1={
        zoom:2,
        center: {lat: 40.758904, lng: -73.985128}
    };
    var mapOptions2={
        zoom:10,
        center: {lat: 40.758904, lng: -73.985128}
    };
    var mapOptions3={
        zoom:18,
        center: {lat: 40.758904, lng: -73.985128}
    };

    map1=new google.maps.Map(document.getElementById('map_canvas1'),mapOptions1);
    map2=new google.maps.Map(document.getElementById('map_canvas2'),mapOptions2);
    map3=new google.maps.Map(document.getElementById('map_canvas3'),mapOptions3);
    }
    google.maps.event.addDomListener(window, 'load', initialize);


>>>>>>> 3189eddf1977b572fe186c5eb994212f9724c2ea
