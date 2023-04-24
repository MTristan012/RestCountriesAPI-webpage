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

export default {
  $,
  generateCard,
  manifesCard,
};
