import data from "./data.js";
import dom from "./dom.js";

const html = document.querySelector("html")
const darkBtn = document.querySelector("#dark-mode-button")

darkBtn.addEventListener("click", () => {
    if (html.dataset.bsTheme == "light"){
        html.dataset.bsTheme = "dark";
    }else{
        html.dataset.bsTheme = "light";
    } 
})

const region = await data.getDataRegion("Americas")
console.log(region)

const datos = await data.data;

dom.manifesCard(datos);