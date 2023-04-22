import { parse } from "https://deno.land/std@0.79.0/encoding/csv.ts";

const res = await fetch("https://www.opendata.metro.tokyo.lg.jp/toyoshima/R4_public_wireless_lan.csv");
const data = await res.text();

const result = await parse(data);

await Deno.writeTextFile("all.json", JSON.stringify(result));
