/* 初期定数 */
var i; var todou;

function start(){

var url = "https://code4sabae.github.io/wbgt-japan/data/prev15WG/latest.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);

	xhr.onreadystatechange = function(){

		if (xhr.readyState == 4 && xhr.status == 200){
			/* jsonを配列に格納 */
			var json_data = eval('(' + xhr.responseText + ')');
		
			/* jsonファイルの中の１番目の日にち */
			var js_data = Object.keys(json_data[0])[0];
			
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
						
						/* 都道府県 
						var js_data2 = json_data2[i].REGION;
						
						
						var j_data2 = json_data2[i].ST;*/
						
						var test = json_data2[i].ST_CODE;
						
						
						/* リストに追加 
						pref(json_data[i].id);*/
						$("#list").append("<li class='link'>" + list_data + " " + json_data[i].id  + " " + test  + " " + js_data2  + " " + j_data2 + "</li>");
					}
	
				}
			
			}
		}

	}

}/*start*/

function pref(x){

	$(document).ready(function () {
   		$.getJSON("https://linkevery2s.github.io/heatstroke/area/st.json", function(data){
        	for(var j in data){
        		if(data[j].ST_CODE.indexOf(x) != -1) {
        			todou[j] = data[j].REGION;
        			return todou[j];

        		}
        	}
    	});
	});

}