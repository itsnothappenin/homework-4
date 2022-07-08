const countries = document.getElementById('countries');
const filterInput = document.getElementById('filterInput');
const filterText = document.getElementById('filterText');
const filterDiv = document.getElementById('filterDiv');
const country = document.getElementById('country');
const searchContainer = document.getElementById('searchContainer');

 var nese;

fetch('https://restcountries.com/v3.1/all')
  .then (function(response) {
    return response.json();
  })
  .then (function(data) {
    nese = data;
    displayCountries(nese)
  });

  function displayCountries (nese) {
    let html = '';
    for ( let country of nese ) {
      html += `<div id="country" class="country">
                <a href="details.html?countryName=${country.name.common}">
                  <div class="imgDiv">
                    <img src=${country.flags.png}>
                  </div>
                  <div class="contentDiv">
                    <h4>${country.name.common}</h4>
                    <p>Population:${country.population}</p>
                    <p>Region:${country.region}</p>
                    <p>Capital:${country.capital}</p>
                  </div>
                </a>
               </div>`
    }
    // console.log(nese);
    countries.insertAdjacentHTML('afterbegin', html);
  }


filterDiv.addEventListener ('click', function(event) {
    filterContainer.classList.toggle('active');
    filterText.classList.toggle('open');
});

filterText.addEventListener('click', function(event) {
    if (event.target.id == '1') {
      displayCountries(nese.filter(data => data.region === 'Africa'));
    } else if (event.target.id == '2') {
      displayCountries(nese.filter(data => data.region === 'Americas'));
    } else if (event.target.id == '3') {
      displayCountries(nese.filter(data => data.region === 'Asia'));
    } else if (event.target.id == '4') {
      displayCountries(nese.filter(data => data.region === 'Europe'));
    } else if (event.target.id == '5') {
      displayCountries(nese.filter(data => data.region === 'Oceania'));
    } else if (event.target.id == '0') {
      displayCountries(nese);
    }
});

document.addEventListener('click', function(event){
  if (!filterDiv.contains(event.target)) {
    filterText.classList.remove('open')
  }
  if (!filterContainer.contains(event.target)) {
    filterContainer.classList.remove('active');
  }
  if (!searchContainer.contains(event.target)) {
    searchContainer.classList.remove('active')
  }
});


searchContainer.addEventListener('click', function(event) {
  searchContainer.classList.add('active');
});
