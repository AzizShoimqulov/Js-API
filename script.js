const search = document.getElementById('search');
const regionButtons = document.querySelectorAll('#regions button');
let allCountries = [];

let savedCountries = localStorage.getItem('countries');

if (savedCountries) {
    allCountries = JSON.parse(savedCountries);
    renderCountries(allCountries);
} else {
    getCountries();
}

async function getCountries() {
    try {
        const API = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,capital,region");
        const data = await API.json();
        allCountries = data;


        localStorage.setItem('countries', JSON.stringify(allCountries));
        renderCountries(allCountries);
    } catch (error) {
        console.error("Xatolik:", error);
    }
}

function renderCountries(countries) {
    const container = document.getElementById('product-list');
    container.innerHTML = '';

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'information';

        countryDiv.innerHTML = `
            <div>
                <img src="${country.flags.png}" alt="${country.flags.alt}" width="80">
                <h1>${country.name.common}</h1>
                <h2>${country.capital}</h2>
                <h3>${country.region}</h3>
                <h4>${country.name.official}</h4>
            </div>
        `;
        container.appendChild(countryDiv);
    });
}

search.addEventListener('input', function () {
    const term = this.value.toLowerCase();
    localStorage.setItem('searchTerm', term)

    const filtered = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(term)
    );
    renderCountries(filtered);
});

const savedSearchTerm = localStorage.getItem('searchTerm');
if (savedSearchTerm) {
    search.value = savedSearchTerm;
    const filtered = allCountries.filter(country =>
        country.name.common.toLowerCase().includes(savedSearchTerm)
    );
    renderCountries(filtered);
}
regionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const selectedRegion = this.getAttribute('data-region');

        if (selectedRegion === 'All') {
            renderCountries(allCountries);
        } else {
            const filtered = allCountries.filter(country =>
                country.region === selectedRegion
            );
            renderCountries(filtered);
        }
    });
});
//asdsadfg
//add js api
//sadfsadf


//asdsadfg
//add js api
//sadfsadf

//asdsadfg
//add js api
//sadfsadf

//asdsadfg
//add js api
//sadfsadf


//asdsadfg
//add js api
//sadfsadf



//asdsadfg
//add js api
//sadfsadf

//asdsadfg
//add js api
//sadfsadf

//asdsadfg
//add js api
//sadfsadf
//asdsadfg
//add js api
//sadfsadf


//asdsadfg
//add js api
//sadfsadf


//asdsadfg
//add js api
//sadfsadf

//asdsadfg
//add js api
//sadfsadf
//asdsadfg
//add js api
//sadfsadf
