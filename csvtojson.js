import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";

const res = await fetch("https://www.wbgt.env.go.jp/prev15WG/dl/yohou_all.csv");
const data = await res.text();

const result = await parse(data);

await Deno.writeTextFile("data/all.json", JSON.stringify(result));


let date = new Date();

const year = date.getFullYear();

const month = date.getMonth() + 1;

const day = date.getDate();

const hour = date.getHours();

const minute = date.getMinutes();


const now_day = year + "年" + month + "月" + day + "日" + hour + "時" + minute + "分";


const write = Deno.writeTextFile("./data/lastupdate.json", '[{"lastupdate":' + '"' + now_day + '"}]');
