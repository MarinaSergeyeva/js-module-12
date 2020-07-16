import debounce from 'lodash.debounce';
import refs from '../js/refs';
import { pnotifyError } from './pnotify';
// import countriesTpl from './templates/countries.hbs';

const baseURL = 'https://restcountries.eu/rest/v2/name/';
let search = '';

refs.searchQuery.addEventListener('input', debounce(fetchCountries, 500));
console.dir(refs.searchQuery);

export function fetchCountries(searchQuery) {
  search = refs.searchQuery.value;

  if (search) {
    let url = `${baseURL}${search}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.length > 10) {
          pnotifyError();
        }
        if (data.length > 1 && data.length <= 10) {
          const list = data.map(element => element.name);
          console.log(list);
        }
        if (data.length === 1) {
          // console.log(data);
          const country = data[0];
          const newCountry = {
            name: country.name,
            languages: country.languages,
          };
          console.log(newCountry);
        }
      });
  }
}

const url = `${baseURL}${search}`;
console.log(url);
