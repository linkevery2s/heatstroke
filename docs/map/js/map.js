
let b = 0;let marker1;let marker2; let gido; let gkeido;

const url = "https://raw.githubusercontent.com/linkevery2s/heatstroke/refs/heads/master/data/all.json";
const area_url = "https://linkevery2s.github.io/heatstroke/area/st.json";
let map;

let map_display = async () =>{

    map = L.map('map', {minZoom: 5, maxZoom: 8, zoomControl: false});
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> | &copy; 仁志, <a href="https://creativecommons.org/licenses/by/4.0/deed.ja" target="_blank">CC BY 4.0</a><br>最終更新日時：<span id="last_date"></span>'
    }).addTo(map);
    map.setView([37.40, 136], 5);
    L.control.zoom({position: 'topleft'}).addTo(map);

    /* 凡例表示 */
    let legend = L.control({
        position: 'bottomright'
    });

    legend.onAdd = function(map) {

        let div = L.DomUtil.create('div', 'info_legend'),
        grades = ["危険", "厳重警戒", "警戒", "注意", "ほぼ安全"],
        labels = [],
        from, to;

        for (let i = 0; i < grades.length; i++) {
            from = grades[i];

            labels.push(
                '<span style="background:' + getColor(from) + '">　</span> ' + from);
        }

        div.innerHTML = labels.join('<br>');
        return div;
    };

    legend.addTo(map);

    last();

}

let getColor = (d) => {
    return d == "危険" ? '#FF0000' :
    d == "厳重警戒" ? '#ffa500' :
    d == "警戒" ? '#ffff00' :
    d == "注意" ? '#00ffff' :
    '#0000ff';
}

let last = async () =>{

    /* fetchで取得 */
    const res = await fetch("https://raw.githubusercontent.com/linkevery2s/heatstroke/master/data/lastupdate.json");
    const data = await res.json();

    last_date.innerHTML = data[0].lastupdate;

}

let GPS = () =>{
	if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(gps_get,gps_error);
 } else {
     alert("エラーが発生したので、現在地を取得できませんでした。");      
 }
}

let gps_get = (position) => {
    gido = position.coords.latitude;
    gkeido = position.coords.longitude;
    map.setView([gido, gkeido], 8);

    let pulsingIcon = L.icon.pulse({iconSize:[12,12],color:'blue'});

    if( b == 0 ){
      marker1 = L.marker([gido, gkeido] ,{icon: pulsingIcon}).addTo(map);

      b=1;

      marker2.onRemove(map);

  }
  else{
    marker1.onRemove(map);

    marker2 = L.marker([gido, gkeido] ,{icon: pulsingIcon}).addTo(map);

    b=0;

}
}

let gps_error = (error) => {
 alert("エラーが発生したので、現在地を取得できませんでした。");
}