//Global Variables
var cityFormEl = document.querySelector("#city-search");
var cityButtonEl = document.querySelector("#city-choice");
var momentDate = moment().format("MM/DD/YYYY");
var currentDateEl = document.querySelector("#current-date");
currentDateEl.textContent = "(" + momentDate + ")";

var formSubmitHandler = function (event) {
  var cityInputEl = document.querySelector("#userCity");

  event.preventDefault();
  // console.log(event);
  var cityName = cityInputEl.value.trim();

  if (cityName) {
    getLocation(cityName);
    cityInputEl.value = "";
    cityInputEl.setAttribute("placeholder", "");
    localStorage.setItem("city", cityName);
  } else {
    cityInputEl.setAttribute("placeholder", "Please enter a city name.");
  }
};

cityFormEl.addEventListener("submit", formSubmitHandler);

cityButtonEl.onclick = function (event) {
  event.preventDefault();
  let target = event.target;
  cityName = target.textContent;
  localStorage.setItem("city", cityName);

  getLocation(cityName);
};

var getLocation = function (city) {
  var currWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=ddcf58abee794b9b038a7f587d591c85";
  fetch(currWeatherUrl).then(function (response) {
    response.json().then(function (data) {
      var selectedCityEl = document.querySelector("#selected-city");
      selectedCityEl.textContent = data.name;

      var lat = data.coord.lat;
      var lon = data.coord.lon;
      getWeather(lat, lon);
    });
  });
};

var getWeather = function (lat, lon) {
  var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=ddcf58abee794b9b038a7f587d591c85";
  fetch(oneCallUrl).then(function (response) {
    response.json().then(function (data) {
      displayWeather(data);
    });
  });
};

var displayWeather = function (data) {
  // console.log(data);
  var currentTempEl = document.querySelector("#current-temp");
  var currentWindEl = document.querySelector("#current-wind");
  var currentHumidityEl = document.querySelector("#current-humidity");
  var currentUvEl = document.querySelector("#current-uv");
  var currentWeather = data.current;
  var iconEl = document.querySelector("#icon-current");

  iconEl.src = "https://openweathermap.org/img/w/" + currentWeather.weather[0].icon + ".png";
  currentTempEl.textContent = currentWeather.temp;
  currentWindEl.textContent = currentWeather.wind_speed;
  currentHumidityEl.textContent = currentWeather.humidity;
  currentUvEl.textContent = currentWeather.uvi;
  currentUvEl.classList.remove("bg-success", "bg-warning", "bg-danger");
  if (currentWeather.uvi < 3) {
    currentUvEl.classList.add("bg-success");
  } else if (currentWeather.uvi < 6) {
    currentUvEl.classList.add("bg-warning");
  } else {
    currentUvEl.classList.add("bg-danger");
  }
  displayForecast(data);
};

var displayForecast = function (data) {
  for (i = 1; i < 6; i++) {
    var forecast = data.daily[i];
    var forecastDate = moment().add(i, "d").format("MM/DD/YYYY");
    var dateEL = document.querySelector("#day" + i);
    var imgEl = document.querySelector("#icon-day" + i);
    var tempEl = document.querySelector("#temp-day" + i);
    var windEl = document.querySelector("#wind-day" + i);
    var humidityEl = document.querySelector("#humidity-day" + i);
    dateEL.textContent = forecastDate;
    imgEl.src = "https://openweathermap.org/img/w/" + forecast.weather[0].icon + ".png";
    tempEl.textContent = forecast.feels_like.day;
    windEl.textContent = forecast.wind_speed;
    humidityEl.textContent = forecast.humidity;
  }
};

var getLocalStorage = function () {
  var cityName = localStorage.getItem("city");
  // console.log(cityName);
  if (!cityName) {
    return;
  } else {
    getLocation(cityName);
  }
};

getLocalStorage();
