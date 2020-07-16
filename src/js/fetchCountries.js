import debounce from 'lodash.debounce';
import { pnotifyError, pnotifyAlert } from './pnotify';
import refs from '../js/refs';
import { countriesListMarkup, countryMarkup, clearMarkup } from './markup';

const baseURL = 'https://restcountries.eu/rest/v2/name/';
const search = '';

refs.searchQuery.addEventListener('input', debounce(fetchCountries, 500));

export function fetchCountries(search) {
  search = refs.searchQuery.value;
  // console.dir(refs.searchQuery);

  if (search) {
    const url = `${baseURL}${search}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.length > 10 && pnotifyAlert();

        data.length > 1 && data.length <= 10 && countriesListMarkup(data);

        data.length === 1 && countryMarkup(data);
      })
      .catch(err => console.log(err.status))
      .finally(clearMarkup());
  }
}
