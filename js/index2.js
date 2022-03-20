//Global Variables
var cityFormEl = document.querySelector("#city-search");
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
  } else {
    cityInputEl.setAttribute("placeholder", "Please enter a city name.");
  }
};

cityFormEl.addEventListener("submit", formSubmitHandler);

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
      console.log(data);
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
  console.log(data);
  for (i = 1; i < 6; i++) {
    var forecastDate = moment().add(i, "d").format("MM/DD/YYYY");
    console.log(forecastDate);
    var date = document.querySelector("#day" + i);
    console.log(date);

    date.textContent = forecastDate;
    // console.log(data.daily.i);
    console.log(data.daily[i]);
    console.log(forecastDate);
  }
};

// $(".day").each(function () {
//   var daysOut = parseInt($(this).attr("id").replace("day", ""));
//   console.log(daysOut);
//   console.log();
// });

//create function to display forecast

//make the uv index change color with an if statement

//make the buttons on the right work

//add last searched city to local storage so that city's weather will populate the forecast and current weather

// uv index
// <2 = green
// class="badge badge-success"
// 3-5 = yellow
// class="badge badge-warning"
// >6 = red
// class="badge badge-danger"
