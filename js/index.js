var cityFormEl = document.querySelector("#city-search");
var cityInputEl = document.querySelector("#userCity");
var momentDate = moment().format("MM/DD/YYYY");
var currentDateEl = document.querySelector("#current-date");
var selectedCityEl = document.querySelector("#selected-city");
var currentTempEl = document.querySelector("#current-temp");
var currentWindEl = document.querySelector("#current-wind");
var currentHumidityEl = document.querySelector("#current-humidity");
var currentUvEl = document.querySelector("#current-uv");

var addDate = function () {
  currentDateEl.textContent = "(" + momentDate + ")";
};

addDate();

var getCurrentWeather = function (city) {
  var currWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=ddcf58abee794b9b038a7f587d591c85";
  fetch(currWeatherUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      displayCurrWeather(data);
    });
  });
};

// getCurrentWeather("harlingen");

var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
  var cityName = cityInputEl.value.trim();

  if (cityName) {
    getCurrentWeather(cityName);
    cityInputEl.value = "";
    cityInputEl.setAttribute("placeholder", cityName);
  } else {
    cityInputEl.setAttribute("placeholder", "Please enter a city name.");
  }
};

var displayCurrWeather = function (currWeather) {
  console.log(currWeather);
  selectedCityEl.textContent = currWeather.name;
  currentTempEl.textContent = "Temp: " + currWeather.main.temp + "°F";
  currentWindEl.textContent = "Wind: " + currWeather.wind.speed + "MPH";
  currentHumidityEl.textContent = "Humidity: " + currWeather.main.humidity + "%";
  // currentUvEl.textContent = "UV Index: " + currWeather.main.;
  addDate();
};
cityFormEl.addEventListener("submit", formSubmitHandler);
