/* 初期定数 */
let j_data2 = new Array(840);
let js_data2 = new Array(840);
let ido = new Array(840);
let keido = new Array(840);

let start = async (x) =>{

	/* 地図の表示 */
	map_display();

	/* fetchで取得 */
	const res = await fetch(url);
    const data = await res.json();

    const res2 = await fetch(area_url);
    const data2 = await res2.json();

    console.log(data);
    console.log(data2);

    for ( let i = 0; i < 840; i++){

    	/* 暑さ指数データ格納 */
		let list_data = data[i + 1][x + 1] / 10;

			if ( data2[i].id = data[i+1][0]){

				/* 観測所 */
				j_data2[i] = data2[i].name;

				/* 緯度、経度 */
				ido[i] = data2[i].lat;

				keido[i] = data2[i].lng;


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

    }/* for */

}/* start */