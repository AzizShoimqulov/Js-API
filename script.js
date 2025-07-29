async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region");
    const data = await response.json();
    console.log(data);

    const container = document.getElementById('product-list');
    container.innerHTML = ''; // Oldingi "Yuklanmoqda..." matnini tozalash

    data.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.className = 'product';

      countryDiv.innerHTML = `
        <div>
          <h3>${country.name.common}</h3>
          <p><strong>Poytaxt:</strong> ${country.capital ? country.capital[0] : "Noma'lum"}</p>
          <p><strong>Hudud:</strong> ${country.region}</p>
        </div>
      `;

      container.appendChild(countryDiv);
    });

  } catch (error) {
    console.error("Xatolik:", error);
  }
}

getCountries();
