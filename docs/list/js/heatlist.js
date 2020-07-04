/* 初期定数 */
var i; var todou;var j_data2 = new Array(840);var js_data2 = new Array(840);

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
					
					for ( i = 0; i < 162; i++){
						var list_data = json_data[i][js_data] / 10;
						
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;

						}else{}
						
						
						/* リストに追加 */

							if (list_data > 31){
								$("#lis").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}
						
					}/* for */

					for ( i = 163; i < 184; i++){
						var list_data = json_data[i][js_data] / 10;
						
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;

						}else{}
						
						
						/* リストに追加 */

							if (list_data > 31){
								$("#lis2").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis2").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis2").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis2").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis2").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}
						
					}/* for */

	
				}
			
			}
		}

	}

}/*start*/

function search(){

$('#keyword').quicksearch('#pref #todou');

}