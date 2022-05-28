/* 初期定数 */
var i; var todou;var j_data2 = new Array(840);var js_data2 = new Array(840);

function start(){

var url = "https://sheets.googleapis.com/v4/spreadsheets/1aJ2bayRusxfwCmtL5ioGwxfiOOEX4RK7Snyhr1c22DM/values/test?key=AIzaSyCbg_30AROG_YdQ2lMMgOPzSsy6PC7Gcx4";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);

	xhr.onreadystatechange = function(){

		if (xhr.readyState == 4 && xhr.status == 200){
			/* jsonを配列に格納 */
			var json_data = eval('(' + xhr.responseText + ')');

			/* jsonファイルの中の１番目の日にち */
			var js_data = 3;

			/* 地域表示 */
			var url2 = "https://linkevery2s.github.io/heatstroke/area/st.json";

			var xhr2 = new XMLHttpRequest();
			xhr2.open("GET", url2);
			xhr2.send(null);

			xhr2.onreadystatechange = function(){

				if (xhr2.readyState == 4 && xhr2.status == 200){

					var json_data2 = eval('(' + xhr2.responseText + ')');

					for ( i = 0; i < 162; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis1").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis1").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis1").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis1").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis1").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 162; i < 184; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis2").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis2").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis2").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis2").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis2").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 184; i < 208; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis3").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis3").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis3").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis3").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis3").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 208; i < 241; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis4").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis4").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis4").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis4").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis4").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 241; i < 259; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis5").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis5").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis5").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis5").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis5").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 259; i < 279; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis6").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis6").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis6").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis6").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis6").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 279; i < 308; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis7").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis7").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis7").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis7").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis7").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 308; i < 322; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis8").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis8").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis8").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis8").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis8").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 322; i < 336; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis9").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis9").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis9").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis9").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis9").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 336; i < 349; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis10").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis10").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis10").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis10").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis10").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 349; i < 357; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis11").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis11").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis11").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis11").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis11").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 357; i < 369; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis12").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis12").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis12").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis12").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis12").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 369; i < 383; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis13").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis13").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis13").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis13").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis13").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 383; i < 388; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis14").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis14").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis14").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis14").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis14").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 388; i < 416; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis15").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis15").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis15").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis15").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis15").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 416; i < 426; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis16").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis16").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis16").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis16").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis16").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 426; i < 443; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis17").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis17").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis17").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis17").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis17").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 443; i < 454; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis18").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis18").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis18").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis18").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis18").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 454; i < 477; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis19").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis19").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis19").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis19").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis19").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 477; i < 489; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis20").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis20").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis20").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis20").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis20").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 489; i < 516; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis21").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis21").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis21").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis21").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis21").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 516; i < 525; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis22").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis22").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis22").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis22").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis22").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 525; i < 535; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis23").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis23").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis23").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis23").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis23").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 535; i < 544; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis24").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis24").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis24").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis24").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis24").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 544; i < 553; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis25").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis25").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis25").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis25").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis25").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 553; i < 561; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis26").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis26").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis26").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis26").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis26").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 561; i < 567; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis27").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis27").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis27").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis27").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis27").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 567; i < 586; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis28").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis28").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis28").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis28").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis28").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 586; i < 592; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis29").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis29").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis29").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis29").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis29").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 592; i < 603; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis30").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis30").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis30").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis30").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis30").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 603; i < 618; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis31").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis31").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis31").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis31").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis31").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 618; i < 636; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis32").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis32").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis32").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis32").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis32").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 636; i < 652; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis33").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis33").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis33").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis33").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis33").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 652; i < 661; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis34").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis34").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis34").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis34").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis34").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 661; i < 676; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis35").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis35").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis35").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis35").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis35").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 676; i < 684; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis36").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis36").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis36").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis36").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis36").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 684; i < 690; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis37").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis37").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis37").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis37").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis37").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 690; i < 704; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis38").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis38").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis38").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis38").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis38").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 704; i < 719; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis39").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis39").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis39").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis39").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis39").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 719; i < 731; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis40").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis40").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis40").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis40").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis40").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 731; i < 745; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis41").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis41").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis41").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis41").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis41").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

					for ( i = 745; i < 759; i++){
						var list_data = json_data.values[i+1][js_data] / 10;
						if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis42").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis42").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis42").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis42").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis42").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 759; i < 764; i++){
					var list_data = json_data.values[i+1][js_data] / 10;
					if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis43").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis43").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis43").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis43").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis43").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 764; i < 781; i++){
					var list_data = json_data.values[i+1][js_data] / 10;
					if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis44").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis44").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis44").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis44").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis44").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 781; i < 797; i++){
					var list_data = json_data.values[i+1][js_data] / 10;
					if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis45").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis45").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis45").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis45").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis45").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 797; i < 824; i++){
					var list_data = json_data.values[i+1][js_data] / 10;
					if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis46").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis46").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis46").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
								$("#lis46").append("<li id = 'li_color4' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else{
								$("#lis46").append("<li id = 'li_color5' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}

					}/* for */

				for ( i = 824; i < 840; i++){
					var list_data = json_data.values[i+1][js_data] / 10;
					if ( json_data2[i].ST_CODE = json_data.values[i+1][0]){
							/* 都道府県 */
							js_data2[i] = json_data2[i].AREA;
							/* 観測所 */
							j_data2[i] = json_data2[i].ST;
						}else{}

						/* リストに追加 */
							if (list_data > 30){
								$("#lis47").append("<li id = 'li_color1' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 27){
								$("#lis47").append("<li id = 'li_color2' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 24){
								$("#lis47").append("<li id = 'li_color3' class='link'>" + js_data2[i] + " "  + j_data2[i] + "<br>暑さ指数：" + list_data + "℃</li>");
							}else if (list_data > 20){
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
