import data from "./data.js";
import dom from "./dom.js";

const html = document.querySelector("html")
const darkBtn = document.querySelector("#dark-mode-button")
const searchRegion = dom.$("#regions");
const datos = await data.data;
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
const region1 = await data.getDataRegion(regions[0]);
const region2 = await data.getDataRegion(regions[1]);
const region3 = await data.getDataRegion(regions[2]);
const region4 = await data.getDataRegion(regions[3]);
const region5 = await data.getDataRegion(regions[4]);
const searchCountry = dom.$("#searchCountry")

dom.manifesCard(datos);

darkBtn.addEventListener("click", () => {
    if (html.dataset.bsTheme == "light"){
        html.dataset.bsTheme = "dark";
    }else{
        html.dataset.bsTheme = "light";
    } 
})

searchRegion.addEventListener("change", function () {
    
    if (searchRegion.value == "1"){
        dom.manifesCard(region1);
    } else if (searchRegion.value == "2") {
        dom.manifesCard(region2);
    } else if(searchRegion.value == "3"){
        dom.manifesCard(region3);
    } else if (searchRegion.value == "4") {
      dom.manifesCard(region4);
    } else if (searchRegion.value == "5") {
      dom.manifesCard(region5);
    } else {
      dom.manifesCard(datos);
    }
    
});

searchCountry.addEventListener("input", function(){
    const country = searchCountry.value.trim().toLowerCase()
    console.log(country)
})
