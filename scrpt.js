const details = document.getElementById("details");

  const url = new URL(location.href);
  const params = url.searchParams;

var nese;

  function checker (url) {
    if (params.has('countryName')) {
      const countryName = params.get('countryName');
    }
      fetch (`https://restcountries.com/v3.1/name/${countryName}`)
        .then (function(response) {
          return response.json();
        })
        .then (function(data) {
          nese = data;
          console.log(data)

          let html= `
                    <div class="col1">
                      <h3>${country.name.common}</h3>
                      <p>Native Name:${country.name.nativeName.ell.common}</p>
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
                  `
        details.insertAdjacentHTML('afterbegin', html);
      });
  }
