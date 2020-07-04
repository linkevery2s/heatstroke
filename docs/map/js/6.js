/* 初期定数 */
var i; var todou;var j_data2 = new Array(840);var js_data2 = new Array(840);
var ido = new Array(840); var keido = new Array(840);

function start(){

	var map = L.map('map', {minZoom: 5, maxZoom: 8});
	L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html" target="_blank">地理院タイル</a>'
  	}).addTo(map);
  	map.setView([37.40, 136], 5);

var url = "https://code4sabae.github.io/wbgt-japan/data/prev15WG/latest.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);

	xhr.onreadystatechange = function(){

		if (xhr.readyState == 4 && xhr.status == 200){
			/* jsonを配列に格納 */
			var json_data = eval('(' + xhr.responseText + ')');
		
			/* jsonファイルの中の１番目の日にち */
			var js_data = Object.keys(json_data[0])[5];
			
			/* 地域表示 */
			var url2 = "https://linkevery2s.github.io/heatstroke/area/st.json";
			
			var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", url2);
			xhr2.send(null);
			
			xhr2.onreadystatechange = function(){

				if (xhr2.readyState == 4 && xhr2.status == 200){
					
					var json_data2 = eval('(' + xhr2.responseText + ')');
					
					for ( i = 0; i < 840; i++){
						var list_data = json_data[i][js_data] / 10;
						
						if ( json_data2[i].ST_CODE = json_data[i].id){

							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
							
							/* 緯度、経度 */
							ido[i] = json_data2[i].LAT;
							
							keido[i] = json_data2[i].LNG;
							

						}else{}
						
						/* リストに追加 */

							if (list_data > 30){
								L.marker([ido[i], keido[i]],{icon: L.divIcon({className: 'marker1'})}).addTo(map);
							}else if (list_data > 27){
								L.marker([ido[i], keido[i]],{icon: L.divIcon({className: 'marker2'})}).addTo(map);
							}else if (list_data > 24){
								L.marker([ido[i], keido[i]],{icon: L.divIcon({className: 'marker3'})}).addTo(map);
							}else if (list_data > 20){
								L.marker([ido[i], keido[i]],{icon: L.divIcon({className: 'marker4'})}).addTo(map);
							}else{
								L.marker([ido[i], keido[i]],{icon: L.divIcon({className: 'marker5'})}).addTo(map);
							}
						
					}
	
				}
			
			}
		}

	}

}/*start*/

function iro(feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 10,
					fillColor: "#2EFE2E",
					color: "#000",
					weight: 1,
					opacity: 1,
					fillOpacity: 0.8
				});
}