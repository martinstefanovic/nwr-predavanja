const API_URL = 'https://api.covid19api.com';
const countrySelectField = document.getElementById('country');
const searchBtn = document.getElementById('search-btn');
const dateFrom = document.getElementById('dateFrom');
const dateTo = document.getElementById('dateTo');

/**
 * =============================
 * *          HELPERS
 =============================== */

const getAllCountries = () => {
  fetch(`${API_URL}/countries`)
    .then((res) => res.json())
    .then((countries) => {
      countries.forEach((country) => {
        createOption(country);
      });
    });
};

const createOption = (country) => {
  // Create option
  const option = document.createElement('option');
  option.setAttribute('value', country.Slug);
  option.innerText = country.Country;

  // Append option to select
  countrySelectField.appendChild(option);
};

const search = () => {
  fetch(
    `${API_URL}/country/${countrySelectField.value}/status/confirmed?from=${dateFrom.value}&to=${dateTo.value}`
  )
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
    });
};

/**
 * =============================
 * *      EVENT LISTENERS
 =============================== */

searchBtn.addEventListener('click', () => {
  if (
    countrySelectField.value === '' ||
    dateFrom.value === '' ||
    dateTo.value === ''
  ) {
    alert('Fill all filter fields!');
  } else {
    // Search if all filters are filled
    search();
  }
});

getAllCountries();
