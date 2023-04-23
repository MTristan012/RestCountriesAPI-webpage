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

const data = await getData()

export default {
  data,
  getDataCountry,
  getDataRegion,
};
