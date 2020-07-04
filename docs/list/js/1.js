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
								$("#lis1").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis1").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis1").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis1").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis1").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}
						
					}/* for */

					for ( i = 162; i < 184; i++){
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

					for ( i = 184; i < 208; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis3").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis3").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis3").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis3").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis3").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 208; i < 241; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis4").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis4").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis4").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis4").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis4").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 241; i < 259; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis5").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis5").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis5").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis5").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis5").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 259; i < 279; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis6").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis6").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis6").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis6").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis6").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 279; i < 308; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis7").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis7").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis7").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis7").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis7").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 308; i < 322; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis8").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis8").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis8").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis8").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis8").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 322; i < 336; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis9").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis9").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis9").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis9").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis9").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 336; i < 349; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis10").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis10").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis10").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis10").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis10").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 349; i < 357; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis11").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis11").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis11").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis11").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis11").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 357; i < 369; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis12").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis12").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis12").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis12").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis12").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 369; i < 383; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis13").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis13").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis13").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis13").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis13").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 383; i < 388; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis14").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis14").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis14").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis14").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis14").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 388; i < 416; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis15").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis15").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis15").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis15").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis15").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 416; i < 426; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis16").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis16").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis16").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis16").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis16").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 426; i < 443; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis17").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis17").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis17").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis17").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis17").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 443; i < 454; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis18").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis18").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis18").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis18").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis18").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 454; i < 477; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis19").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis19").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis19").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis19").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis19").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 477; i < 489; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis20").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis20").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis20").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis20").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis20").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 489; i < 516; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis21").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis21").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis21").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis21").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis21").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 516; i < 525; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis22").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis22").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis22").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis22").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis22").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 525; i < 535; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis23").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis23").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis23").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis23").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis23").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 535; i < 544; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis24").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis24").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis24").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis24").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis24").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 544; i < 553; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis25").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis25").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis25").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis25").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis25").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 553; i < 561; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis26").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis26").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis26").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis26").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis26").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 561; i < 567; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis27").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis27").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis27").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis27").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis27").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 567; i < 586; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis28").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis28").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis28").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis28").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis28").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 586; i < 592; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis29").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis29").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis29").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis29").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis29").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 592; i < 603; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis30").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis30").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis30").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis30").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis30").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 603; i < 618; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis31").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis31").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis31").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis31").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis31").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 618; i < 636; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis32").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis32").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis32").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis32").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis32").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 636; i < 652; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis33").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis33").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis33").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis33").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis33").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 652; i < 661; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis34").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis34").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis34").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis34").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis34").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 661; i < 676; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis35").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis35").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis35").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis35").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis35").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 676; i < 684; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis36").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis36").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis36").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis36").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis36").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 684; i < 690; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis37").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis37").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis37").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis37").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis37").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 690; i < 704; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis38").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis38").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis38").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis38").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis38").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 704; i < 719; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis39").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis39").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis39").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis39").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis39").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 719; i < 731; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis40").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis40").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis40").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis40").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis40").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 731; i < 745; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis41").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis41").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis41").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis41").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis41").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 745; i < 759; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis42").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis42").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis42").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis42").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis42").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 759; i < 764; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis43").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis43").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis43").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis43").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis43").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 764; i < 781; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis44").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis44").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis44").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis44").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis44").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 781; i < 797; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis45").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis45").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis45").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis45").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis45").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 797; i < 824; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis46").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis46").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis46").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis46").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis46").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 824; i < 840; i++){
						var list_data = json_data[i][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data[i].id){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 31){
								$("#lis47").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 28){
								$("#lis47").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 25){
								$("#lis47").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 21){
								$("#lis47").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis47").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
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