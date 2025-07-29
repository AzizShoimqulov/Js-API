 async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Xatolik:", error);
  }
}

getCountries();
