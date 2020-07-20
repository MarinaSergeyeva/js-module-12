import refs from './refs';
import countriesList from '../templates/countries-list-tmp.hbs';
import country from '../templates/country-tml.hbs';

export function countriesListMarkup(data) {
  const markup = countriesList(data);
  refs.content.innerHTML = markup;
  clearInput();
}

export function countryMarkup(data) {
  const markup = country(data);
  refs.content.innerHTML = markup;
  clearInput();
}

// function clearInput() {
//   refs.searchQuery.value = '';
// }

export function clearMarkup() {
  refs.content.innerHTML = '';
}
