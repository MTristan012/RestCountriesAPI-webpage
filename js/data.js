const getData = async () => {
  return fetch(`https://restcountries.com/v3.1/all`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => error);
};

const getDataCountry = async (country) => {
  return fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => error);
};

const getDataRegion = async (region) => {
  return fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((response) => response.json())
    .then((response) => response)
    .catch((error) => error);
};

const countryFilter = (data) => {
  let cities = data.filter((location) => location.city);
  return cities;
};

const filterCountry = await getDataCountry("peru");

const data = await getData()

export default {
  data,
  filterCountry,
  getDataRegion,
};
