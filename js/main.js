import data from "./data.js";
import dom from "./dom.js";

const html = document.querySelector("html")
const darkBtn = document.querySelector("#dark-mode-button")
const datos = await data.data;

dom.manifesCard(datos);

darkBtn.addEventListener("click", () => {
    if (html.dataset.bsTheme == "light"){
        html.dataset.bsTheme = "dark";
    }else{
        html.dataset.bsTheme = "light";
    } 
})

const searchRegion = dom.$("#regions");
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
const region1 = await data.getDataRegion(regions[0]);
const region2 = await data.getDataRegion(regions[1]);
const region3 = await data.getDataRegion(regions[2]);
const region4 = await data.getDataRegion(regions[3]);
const region5 = await data.getDataRegion(regions[4]);
searchRegion.addEventListener("change", function () {
  if (searchRegion.value == "1") {
    dom.manifesCard(region1);
    addClickEventToCards();
  } else if (searchRegion.value == "2") {
    dom.manifesCard(region2);
    addClickEventToCards();
  } else if (searchRegion.value == "3") {
    dom.manifesCard(region3);
    addClickEventToCards();
  } else if (searchRegion.value == "4") {
    dom.manifesCard(region4);
    addClickEventToCards();
  } else if (searchRegion.value == "5") {
    dom.manifesCard(region5);
    addClickEventToCards();
  } else {
    dom.manifesCard(datos);
    addClickEventToCards();
  }
});

const searchCountry = dom.$("#searchCountry");
searchCountry.addEventListener("input", function () {
  let searchValue = searchCountry.value;
  const filteredData = datos.filter((country) =>
    country.name.common.toLowerCase().includes(searchValue)
  );
  dom.manifesCard(filteredData);
  addClickEventToCards()
});

function addClickEventToCards() {
  const cards = document.querySelectorAll(".cardID");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardId = card.id;
      console.log("El ID de la tarjeta es: ", cardId);
    });
  });
}

addClickEventToCards()