import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";

const res = await fetch("https://www.wbgt.env.go.jp/prev15WG/dl/yohou_all.csv");
const data = await res.text();

const result = await parse(data);

await Deno.writeTextFile("data/all.json", JSON.stringify(result));


let date = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });

const write = Deno.writeTextFile("data/lastupdate.json", '[{"lastupdate":' + '"' + date + '"}]');
