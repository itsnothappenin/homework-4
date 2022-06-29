const countries = document.getElementById('countries');

fetch('https://restcountries.com/v3.1/all')
  .then (function(response) {
    return response.json();
  })
  .then (function(data) {
    let html = '';
    for ( let country of data ) {
      html += `<div class="container">
                  <div class="country">
                    <img src=${country.flags}>
                    <p>${country.altSpellings[3]}</p>
                    <p>${country.population}</p>
                    <p>${country.region}</p>
                    <p>${country.capital}</p>
                  <div>
               </div>`
    }
      countries.insertAdjacentHTML('afterbegin', html);
  })
