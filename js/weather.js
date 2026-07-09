const city = document.querySelector(".weather-city");
const country = document.querySelector(".weather-country");
const temp = document.querySelector(".weather-temp");
const condition = document.querySelector(".weather-condition");

const humidity = document.querySelector(".weather-humidity");
const wind = document.querySelector(".weather-wind");
const feels = document.querySelector(".weather-feels");
const visibility = document.querySelector(".weather-visibility");

const weatherIcon = document.querySelector(".weather-icon");

const API_KEY = "93f31e8d11a6d40d4de41a618f721b4d";

async function getWeather() {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
    );

    if (!response.ok) {
      throw new Error("Weather not found");
    }

    const data = await response.json();

    city.textContent = data.name;
    country.textContent = data.sys.country;

    temp.textContent = `${Math.round(data.main.temp)}°`;
    condition.textContent = data.weather[0].main;

    humidity.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} km/h`;
    feels.textContent = `${Math.round(data.main.feels_like)}°`;
    visibility.textContent = `${data.visibility / 1000} km`;

    changeIcon(data.weather[0].main);
  } catch (err) {
    console.log(err);
  }
}

function changeIcon(weather) {
  weatherIcon.className = "weather-icon text-7xl text-[var(--primary)] mb-5";

  switch (weather) {
    case "Clear":
      weatherIcon.classList.add("fa-solid", "fa-sun");
      break;

    case "Clouds":
      weatherIcon.classList.add("fa-solid", "fa-cloud");
      break;

    case "Rain":
      weatherIcon.classList.add("fa-solid", "fa-cloud-rain");
      break;

    case "Drizzle":
      weatherIcon.classList.add("fa-solid", "fa-cloud-rain");
      break;

    case "Thunderstorm":
      weatherIcon.classList.add("fa-solid", "fa-cloud-bolt");
      break;

    case "Snow":
      weatherIcon.classList.add("fa-solid", "fa-snowflake");
      break;

    case "Mist":
    case "Fog":
    case "Haze":
      weatherIcon.classList.add("fa-solid", "fa-smog");
      break;

    default:
      weatherIcon.classList.add("fa-solid", "fa-cloud");
  }
}

getWeather();
