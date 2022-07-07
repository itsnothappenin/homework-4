const countries = document.getElementById('countries');
const filterInput = document.getElementById('filterInput');
const filterText = document.getElementById('filterText');
const filterDiv = document.getElementById('filterDiv');
const country = document.getElementById('country');
const searchContainer = document.getElementById('searchContainer');

// const europe =[];
 var nese;

fetch('https://restcountries.com/v3.1/all')
  .then (function(response) {
    return response.json();
  })
  .then (function(data) {
    nese = data




    let html = '';
    for ( let country of data ) {
      html += `<div id="country" class="country">
                <a href="details.html?countryName=${country.name.common}" target='_blank'>
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
    console.log(data);

      countries.insertAdjacentHTML('afterbegin', html);
  });
  console.log(nese);
  // console.log(europe);

  // console.log(africa);
  // console.log(americas);
  // console.log(asia);
  // console.log(oceania);


filterDiv.addEventListener ('click', function(event) {
    filterContainer.classList.toggle('active');
    filterText.classList.toggle('open');
});

// filterText.addEventListener('click');

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

// document.addEventListener('click', function(event) {
//   if (event.target.classList.contains('.country')) {
//     // window.location = "file:///C:/Users/USER/Desktop/hw4/details.html";
//
//   }
// });
