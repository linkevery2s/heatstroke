/* 初期定数 */
var i; var j; var todou;var j_data2 = new Array(840);var js_data = new Array(840); var js_data2 = new Array(840);
var count; var rank = new Array(840,840);

function start(){

var url = "https://code4sabae.github.io/wbgt-japan/data/est15WG/202007.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);

	xhr.onreadystatechange = function(){

		if (xhr.readyState == 4 && xhr.status == 200){
			/* jsonを配列に格納 */
			var json_data = eval('(' + xhr.responseText + ')');
		
			/* 都道府県IDを格納 */
			for ( i = 0; i < 840; i ++){
				js_data[i] = Object.keys(json_data[0])[i];
			}
			/* 配列の個数をカウント */
			count = json_data.length;
			
			for (j = count-1 ; j >=0 ;  j--){
				
				var coun = Object.keys(json_data[j])[0];
				
				if( json_data[j][coun] == ""){
				}else{
					break;
				}
				
			}
			
			alert(json_data[j][coun]);
			
			for (var x = 0; x < 840; x++){
				rank[x]= js_data[x];
				for ( var y = 0; y < 840; y++){
				rank[x][y]= json_data[j][Object.keys(json_data[j])[y]];
				}
			}
			
			alert(rank[0][2]);

			
			/* 地域表示 */
			var url2 = "https://linkevery2s.github.io/heatstroke/area/st.json";
			
			var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", url2);
			xhr2.send(null);
			
			xhr2.onreadystatechange = function(){

				if (xhr2.readyState == 4 && xhr2.status == 200){
					
					var json_data2 = eval('(' + xhr2.responseText + ')');
					
					for ( i = 0; i < 50; i++){
						var list_data = json_data[i][js_data];
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
								$("#todou").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：<span id='rank_color'>" + list_data + "℃</span></li>");

					}/* for */



				}
			
			}
		}

	}

}/*start*/
