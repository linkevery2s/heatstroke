/* 初期定数 */
var i; var j; var todou;var j_data2 = new Array(840);var js_data = new Array(840); var js_data2 = new Array(840);
var count; var rank = new Array(840,840,840);var list_data = new Array(840);

function start(){

var url = "https://code4sabae.github.io/wbgt-japan/data/est15WG/202008.json";

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
			
			/* 最も直近の時間を取得 */
			for (j = count-1 ; j >=0 ;  j--){
				
				var coun = Object.keys(json_data[j])[0];
				
				if( json_data[j][coun] == ""){
				}else{
					break;
				}
				
			}
			
			/* 日時表示 */
			document.getElementById('day_s').innerHTML = json_data[j].Date + " " + json_data[j].Time +"現在";

			
			/* 地域表示 */
			var url2 = "https://linkevery2s.github.io/heatstroke/area/st.json";
			
			var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", url2);
			xhr2.send(null);
			
			xhr2.onreadystatechange = function(){

				if (xhr2.readyState == 4 && xhr2.status == 200){
					
					var json_data2 = eval('(' + xhr2.responseText + ')');
					
					for ( i = 0; i < 840; i++){
						list_data[i] = json_data[j][js_data[i]];
						if ( json_data2[i].ST_CODE = js_data[i]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						rank[i] = [[js_data2[i] + " " +j_data2[i]], [list_data[i]]];

					}/* for */

					/* 並び替え */
					rank.sort(function(a,b){return(b[1] - a[1]);});

					for (i = 0; i < 50; i++){
					
						/* リストに追加 */
								$("#todou").append("<li id = 'li_color1' class='link'>" + rank[i][0] + "<br>暑さ指数：<span id='rank_color'>" + rank[i][1] + "℃</span></li>");
					
					}

				}
				
			
			}
		}

	}

}/*start*/
