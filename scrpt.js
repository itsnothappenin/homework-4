const about = document.getElementById('about')

const url = new URL(location.href);
const params = url.searchParams;
let countryName;
if (params.has('countryName')) {
  countryName = params.get('countryName');
}
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    let html = ''
    for (let country of data) {
      html += `
                  <div class="flag">
                    <img src=${country.flags.png}>
                  </div>
                  <div class="details">
                    <div class="col1">
                      <h3>${country.name.official}</h3>
                      <p>Native Name:${country.name.nativeName}</p>
                      <p>Population:${country.population}</p>
                      <p>Region: ${country.region}</p>
                      <p>Sub Region: ${country.subregion}</p>
                      <p>Capital: ${country.capital[0]}</p>
                    </div>
                    <div class="col2>">
                      <br>
                      <br>
                      <p>Top Level Domain:${country.tld[0]}</p>
                      <p>Currencies: ${country.currencies[0]}</p>
                      <p>Languages:${country.languages}</p>
                    </div>
                  <div>
                  `
      about.insertAdjacentHTML('afterbegin', html);
    }
  });

