const weatherForm = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city-input");
const weatherResult = document.querySelector("#weather-result");
require('dotenv').config();

const apiKey = process.env.API_KEY;

// Objeto com as traduções das descrições do tempo
const weatherDescriptions = {
    "clear sky": "Céu limpo",
    "few clouds": "Poucas nuvens",
    "scattered clouds": "Nuvens dispersas",
    "broken clouds": "Nuvens quebradas",
    "shower rain": "Chuva fraca",
    "rain": "Chuva",
    "thunderstorm": "Tempestade",
    "snow": "Neve",
    "mist": "Névoa",
  };




function fetchWeatherData(city) {
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const temperature = (data.main.temp-273.15).toFixed(2);

      const description = data.weather[0].description;
      const translatedDescription = weatherDescriptions[description] || description;


      weatherResult.innerHTML = `Previsão do tempo em ${city}:<br>Temperatura: ${temperature}°C<br>${translatedDescription}`;
    })
    .catch((error) => {
      console.error("Erro ao obter os dados da previsão do tempo:", error);
    });
}

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();

  if (city !== "") {
    fetchWeatherData(city);
  }
});
