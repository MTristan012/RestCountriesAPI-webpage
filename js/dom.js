const $ = (selector) => document.querySelector(selector);
const newE = (tag) => document.createElement(tag);
const countries = $("#container")

const generateCard = (country) => {
  const div = newE("div");
  div.className = "card border border-0 mt-4";
  div.innerHTML = `
    <div class="card-img">
      <img
        class=""
        src=${country.flags.png}
        alt=${country.flags.alt ? country.flags.alt : " "}
      />
    </div>
    <div class="card-body">
      <div class="">
        <div class="fs-2 fw-bold">
          ${country.name.common}
        </div>
        <div>
          <p>
            <span class="fw-semibold">Populations: </span>
            <span>${country.population}</span>
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

export default{
    $,
    generateCard,
    manifesCard,
}