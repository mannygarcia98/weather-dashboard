var cityFormEl = document.querySelector("#city-form");
var cityInputEl = document.querySelector("#userCity");
var apiKey = "ddcf58abee794b9b038a7f587d591c85";

var cityName = "Harlingen";
function getWeather() {
  fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ddcf58abee794b9b038a7f587d591c85")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.coord.lat);
      var lat = data.coord.lat;
      var lon = data.coord.lon;
      console.log(lat, lon);
      console.log(data.coord.lon);
    });
}
getWeather();

var formSubmitHandler = function (event) {
  event.preventDefault();
  console.log(event);
};

cityFormEl.addEventListener("submit", formSubmitHandler);
