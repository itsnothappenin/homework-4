const about = document.getElementById("about");

const url = new URL(location.href);
const params = url.searchParams;
let countryName;
let arr = [];

if (params.has('countryName')) {
  countryName = params.get('countryName');
}
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    arr.push(data)
    console.log(arr)
    const currencies = Object.values(arr[0][0].currencies).map(o => o.name).join(',');
    const languages = Object.values(arr[0][0].languages).join(',');
    let html = ''
       html += `
                  <div class="flag">
                    <img src=${arr[0][0].flags.png}>
                  </div>
                  <div class="details">
                    <div class="col1">
                      <h3>${arr[0][0].name.official}</h3>
                      <p>Native Name:${arr[0][0].name.common}</p>
                      <p>Population:${arr[0][0].population}</p>
                      <p>Region: ${arr[0][0].region}</p>
                      <p>Sub Region: ${arr[0][0].subregion}</p>
                      <p>Capital: ${arr[0][0].capital[0]}</p>
                    </div>
                    <div class="col2>">
                      <br>
                      <br>
                      <br>
                      <br>
                      <br>
                      <p>Top Level Domain:${arr[0][0].tld[0]}</p>
                      <p>Currencies: ${currencies}</p>
                      <p>Languages:${languages}</p>
                    </div>
                  <div>
                  `
      about.insertAdjacentHTML('afterbegin', html);
    });
