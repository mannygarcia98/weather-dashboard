var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#userCity");

var getCurrentWeather = function (city) {
  var currWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=ddcf58abee794b9b038a7f587d591c85";
  fetch(currWeatherUrl).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
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
    $("#userCity").attr("placeholder", cityName);
  } else {
    $("#userCity").attr("placeholder", "Please enter a valid city name.");
  }
};

cityFormEl.addEventListener("submit", formSubmitHandler);
