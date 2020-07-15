import refs from '../js/refs';
// import countriesTpl from './templates/countries.hbs';

var _ = require('lodash');

console.log(refs);
const baseURL = 'https://restcountries.eu/rest/v2/name/san';

function fetchCountries(searchQuery) {
  const url = baseURL;

  return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
}
// const markup = countriesTpl(data);
// console.log(markup);

export default fetchCountries;
