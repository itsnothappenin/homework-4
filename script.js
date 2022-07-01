const countries = document.getElementById('countries');

fetch('https://restcountries.com/v3.1/all')
  .then (function(response) {
    return response.json();
  })
  .then (function(data) {
    let html = '';
    for ( let country of data ) {
      html += `<div class="country">
                <div class="imgDiv">
                  <img src=${country.flags}>
                </div>
                <div class="contentDiv">
                  <h4>${country.altSpellings[3]}</h4>
                  <p>Population:${country.population}</p>
                  <p>Region:${country.region}</p>
                  <p>Capital:${country.capital}</p>
                </div>
               </div>`
    }
      countries.insertAdjacentHTML('afterbegin', html);
  })
