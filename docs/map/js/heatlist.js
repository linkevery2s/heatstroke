/* 初期定数 */
var i;

function start(){

var url = "https://code4sabae.github.io/wbgt-japan/data/prev15WG/latest.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);

xhr.onreadystatechange = function(){

	if (xhr.readyState == 4 && xhr.status == 200){
	
		var json_data = eval('(' + xhr.responseText + ')');
		
			/* jsonファイルの中の１番目の日にち */
			var js_data = Object.keys(json_data[0])[0];
			
			for ( i = 0; i < 840; i++){
				var list_data = json_data[i][js_data] / 10;
				/* リストに追加 */
				$("#list").append("<li class='link'>" + list_data + "　" + json_data[i].id + "</li>");
			}
	
	}

}

}