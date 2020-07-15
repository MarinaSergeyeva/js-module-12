import './styles.css';
import './js/pnotify';
import fetchCountries from './js/fetchCountries';
import refs from './js/refs';

const baseURL = 'https://restcountries.eu/rest/v2/name/';
let result = '';

refs.searchCountry.addEventListener(
  'input',
  _.debounce(function (e) {
    result = e.target.value;
    console.log(result);

    if (result !== '') {
    }
  }, 1000),
);

fetchCountries();
