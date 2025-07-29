async function getCountries(){
    try{
        const API = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region")
        const data = await API.json()
        console.log(data);

        const container = document.getElementById('product-list');
        container.innerHTML = '';

        data.forEach(country => {
           const countryDiv = document.createElement('div')
           countryDiv.className='information'
           
        countryDiv.innerHTML= `
          <div>
            <img src="${country.flags.png}" alt="${country.flags.alt}" width="80">
            <h1>${country.name.common}</h1>
            <h2>${country.capital}</h2>
            <h3>${country.region}</h3>
            <h4>${country.name.official}</h4>
          </div>
        `;
        container.appendChild(countryDiv)
        });

    }catch(error){
        console.error("Xatolik:", error);
    }
}

getCountries()