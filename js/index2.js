//Global Variables
var cityFormEl = document.querySelector("#city-search");

var getCurrentWeather = function (city) {
  var currWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=ddcf58abee794b9b038a7f587d591c85";
  fetch(currWeatherUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      // displayCurrWeather(data);
      // getForecast(data);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lat, lon);
      getForecast(lat, lon);
    });
  });
};

var getForecast = function (lat, lon) {
  var oneCallUrl = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" + lat + "&lon=" + lon + "&appid=ddcf58abee794b9b038a7f587d591c85";
  fetch(oneCallUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
    });
  });
};

var formSubmitHandler = function (event) {
  var cityInputEl = document.querySelector("#userCity");
  var cityInputEl = document.querySelector("#userCity");

  event.preventDefault();
  // console.log(event);
  var cityName = cityInputEl.value.trim();

  if (cityName) {
    getCurrentWeather(cityName);
    cityInputEl.value = "";
    cityInputEl.setAttribute("placeholder", cityName);
  } else {
    cityInputEl.setAttribute("placeholder", "Please enter a city name.");
  }
};

cityFormEl.addEventListener("submit", formSubmitHandler);
