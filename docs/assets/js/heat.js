var day = new Array(10);

function heat(){

	/* マップの初期表示 */
	document.getElementById('heatmap').innerHTML = '<iframe src ="map/1.html" id = "map_frame" width="100%" height="500px"></iframe>';

	/* マップの初期表示 */
	document.getElementById('heatlist').innerHTML = '<iframe src ="list/1.html" id = "map_frame" width="100%" height="500px"></iframe>';

	/* リストボックス表示 */
	option_ini();

}

function option_ini(){

var url = "https://code4sabae.github.io/wbgt-japan/data/prev15WG/latest.json";

var xhr = new XMLHttpRequest();
xhr.open("GET", url);
xhr.send(null);

	xhr.onreadystatechange = function(){

		if (xhr.readyState == 4 && xhr.status == 200){
			/* jsonを配列に格納 */
			var json_data = eval('(' + xhr.responseText + ')');
		
			/* 日にち格納map */
			var month = document.getElementById('month');
			document.createElement('option')
			for (var i = 0; i < 10; i++){
				day[i] = Object.keys(json_data[0])[i];
				var option = document.createElement('option');
				option.setAttribute('value', i);
				option.innerHTML = day[i].slice(0, 4) + "年" + day[i].slice(4, -4) + "月" + day[i].slice(6, -2) + "日　" +  day[i].slice(-2) + "時";
				month.appendChild(option);
			}

			/* 日にち格納list */
			var month2 = document.getElementById('month2');
			document.createElement('option')
			for (var i = 0; i < 10; i++){
				day[i] = Object.keys(json_data[0])[i];
				var option2 = document.createElement('option');
				option2.setAttribute('value', i);
				option2.innerHTML = day[i].slice(0, 4) + "年" + day[i].slice(4, -4) + "月" + day[i].slice(6, -2) + "日　" +  day[i].slice(-2) + "時";
				month2.appendChild(option2);
			}
			
			/* 最終更新日時 */
			document.getElementById('day_s').innerHTML = "最終更新日時：" + json_data[0].dt;
			document.getElementById('day_s2').innerHTML = "最終更新日時：" + json_data[0].dt;

		}
	}

}

/* リストボックスが変わった時 */
function select_change(){

	var selindex = document.getElementById('month').selectedIndex;
	var target = document.getElementById('heatmap');
	
    switch (selindex) {
      case 0:
        target.innerHTML = '<iframe src ="map/1.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 1:
        target.innerHTML = '<iframe src ="map/2.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 2:
        target.innerHTML = '<iframe src ="map/3.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 3:
        target.innerHTML = '<iframe src ="map/4.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 4:
        target.innerHTML = '<iframe src ="map/5.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 5:
        target.innerHTML = '<iframe src ="map/6.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 6:
        target.innerHTML = '<iframe src ="map/7.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 7:
        target.innerHTML = '<iframe src ="map/8.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 8:
        target.innerHTML = '<iframe src ="map/9.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 9:
        target.innerHTML = '<iframe src ="map/10.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
    }

}

/* リストボックスが変わった時 */
function select_change2(){

	var selindex = document.getElementById('month2').selectedIndex;
	var target = document.getElementById('heatlist');
	
    switch (selindex) {
      case 0:
        target.innerHTML = '<iframe src ="list/1.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 1:
        target.innerHTML = '<iframe src ="list/2.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 2:
        target.innerHTML = '<iframe src ="list/3.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 3:
        target.innerHTML = '<iframe src ="list/4.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 4:
        target.innerHTML = '<iframe src ="list/5.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 5:
        target.innerHTML = '<iframe src ="list/6.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 6:
        target.innerHTML = '<iframe src ="list/7.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 7:
        target.innerHTML = '<iframe src ="list/8.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 8:
        target.innerHTML = '<iframe src ="list/9.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
      case 9:
        target.innerHTML = '<iframe src ="list/10.html" id = "map_frame" width="100%" height="500px"></iframe>';
        break;
    }

}