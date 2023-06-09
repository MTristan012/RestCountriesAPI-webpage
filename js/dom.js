const $ = (selector) => document.querySelector(selector);
const newE = (tag) => document.createElement(tag);

const countries = $("#container");

const generateCard = (country) => {
  let num = country.population;
  let formatNum = num.toLocaleString("es-Es", { useGrouping: true });
  const div = newE("div");
  div.className = "card border border-0 bg-body-tertiary shadow p-0 cardID";
  div.setAttribute("id", country.name.common);
  div.setAttribute("type", "button");
  div.innerHTML = `
    <div class="card-img" >
      <img
        class="w-100 rounded-3 object-fit-cover" style="height: 8rem;"
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
  let [coin] = Object.keys(city[0].currencies);
  let [native] = Object.keys(city[0].name.nativeName)
  let num = city[0].population;
  let formatNum = num.toLocaleString("es-Es", { useGrouping: true });
  const div = newE("div");
  div.className = "card mb-3 border-0";
  div.innerHTML = `
    <div class="row g-0 justify-content-around">
      <div class="col-md-4 d-flex">
        <img src="${
          city[0].flags.png
        }" class="w-100 object-fit-contain" style="height: 25rem;" alt="${
    city[0].flags.alt ? city[0].flags.alt : " "
  }">
      </div>
      <div class="d-flex align-items-center col-md-6">
        <div class="card-body">
          <div class="fs-6">
            <p class="fs-5 fw-bold">
              ${city[0].name.common}
            </p>
            <div class="row row-cols-1 row-cols-md-2">
              <div class="fs-6">
                <p>
                  <span class="fw-semibold">Native Name: </span>
                  <span>${city[0].name.nativeName[native].official}</span>
                </p>
                <p>
                  <span class="fw-semibold">Populations: </span>
                  <span>${formatNum}</span>
                </p>
                <p>
                  <span class="fw-semibold">Sub Region: </span>
                  <span>${city[0].subregion}</span>
                </p>
                <p>
                  <span class="fw-semibold">Region: </span>
                  <span>${city[0].region}</span>
                </p>
                <p>
                  <span class="fw-semibold">Capital: </span>
                  <span>${city[0].capital}</span>
                </p>
              </div>
              <div>
                <p>
                  <span class="fw-semibold">Top Level Domain: </span>
                  <span>${city[0].tld}</span>
                </p>
                <p>
                  <span class="fw-semibold">Currencies: </span>
                  <span>${city[0].currencies[coin].name}</span>
                </p>
                <p>
                  <span class="fw-semibold">Languages: </span>
                  <span id="lang">
                  </span>
                </p>
              </div>
            </div>
            <div>
              <span class="fw-semibold">Border Countries: </span>
              <span id="borders">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  return div;
};

const languages = (city) => {
  const lang = $("#lang")
  const allLang = city[0].languages;
  console.log(allLang)
  let lan = []
  for (const property in allLang) {
    lan.push(" " + allLang[property]);
  }
  lang.innerHTML = lan.toString()
}

const manifestMasterCard = (card) => {
  const masterCardID = $("#masterCard");
  masterCardID.innerHTML = ""
  masterCardID.appendChild(masterCard(card))
}

const cBtn = (city) => {
  const btn = newE("button");
  btn.className = "btn nationBtn bg-body-tertiary m-2";
  btn.setAttribute("id", city);
  btn.innerHTML = city
  return btn
}

const borderCountryBTN = (city) => {
  const borders = $("#borders")
  if (city[0].borders) {
    let region = city[0].borders;
    region.forEach((element) =>{
      const countryBtn = cBtn(element)
      borders.appendChild(countryBtn)
    })
  }else{
    let region = ""
    borders.innerHTML = "Without Border Countries"
  }
  
}

export default {
  $,
  generateCard,
  manifesCard,
  manifestMasterCard,
  languages,
  borderCountryBTN,
};
