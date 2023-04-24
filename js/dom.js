const $ = (selector) => document.querySelector(selector);
const newE = (tag) => document.createElement(tag);

const countries = $("#container");

const generateCard = (country) => {
  let num = country.population
  let formatNum = num.toLocaleString('es-Es', {useGrouping: true})
  const div = newE("div");
  div.className = "card border border-0 bg-body-tertiary shadow p-0 cardID";
  div.setAttribute("id", country.name.common)
  div.setAttribute("type", "button")
  div.innerHTML = `
    <div class="card-img" >
      <img
        class="card-img-top"
        src=${country.flags.png}
        alt=${country.flags.alt ? country.flags.alt : " "}
      />
    </div>
    <div class="card-body text-start">
      <div class="">
        <p class="fs-5 fw-bold">
          ${country.name.common}
        </p>
        <div>
          <p>
            <span class="fw-semibold">Populations: </span>
            <span>${formatNum}</span>
          </p>
          <p>
            <span class="fw-semibold">Region: </span>
            <span>${country.region}</span>
          </p>
          <p>
            <span class="fw-semibold">Capital: </span>
            <span>${country.capital}</span>
          </p>
        </div>
      </div>
    </div>
  `;
  return div;
};

const manifesCard = (card) => {
    countries.innerHTML = "";
    card.forEach((element) => {
    const cards = generateCard(element);
    countries.appendChild(cards);
    });
};

const masterCard = (city) => {
  const mCard = $("#masterCard")
  mCard.innerHTML = ""
  let num = city.population;
  let formatNum = num.toLocaleString("es-Es", { useGrouping: true });
  const div = newE("div");
  div.className = "card mb-3";
  div.innerHTML = `
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${city.flags.png}" class="img-fluid rounded-start" alt="${
    country.flags.alt ? country.flags.alt : " "
  }">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${country.name.common}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  `;
  mCard.innerHTML = div.innerHTML
}

export default {
  $,
  generateCard,
  manifesCard,
};
