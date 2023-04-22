import data from "./data.js";
import dom from "./dom.js";

console.log(data.filterCountry)
console.log(data.filterRegion);


const datos = await data.data;

dom.manifesCard(datos);