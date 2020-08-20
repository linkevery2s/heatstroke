
var b = 0;var marker1;var marker2; var gido; var gkeido;

function GPS(){
	if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(gps_get,gps_error);
     } else {
       alert("エラーが発生したので、現在地を取得できませんでした。");      
     }
}

function gps_get(position) {
    gido = position.coords.latitude;
    gkeido = position.coords.longitude;
    map.setView([gido, gkeido], 8);

		var pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});

if( b == 0 ){
		marker1 = L.marker([gido, gkeido] ,{icon: pulsingIcon}).addTo(map);

b=1;

marker2.onRemove(map);

}
else{
marker1.onRemove(map);

marker2 = L.marker([gido, gkeido] ,{icon: pulsingIcon}).addTo(map);

b=0;

}
}

function gps_error(error) {
       alert("エラーが発生したので、現在地を取得できませんでした。");
}