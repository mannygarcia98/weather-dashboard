## Step 1

When a user first gets to the page, it will default to the weather for the last city they looked up. If there is no city in local storage, placeholder text will be displayed prompting them to search for a city or choose one from the side bar.
"Welcome! To get started, search for your city in the search bar to your left or choose one from the list."

1. check if any cities are in local storage
   1. if there are display to page
   2. else placeholder text

## Step 2

A user will type in the name of a city and expect my site to display current weather and a 5 day forecast.

2. this will require one api to get the users lat. & lon. based on the name of the city that was entered
   1. if the user types in a proper city, the lat & lon will be used to display the current weather.
      1. the uv index will change color depending on severity
      2. the current date will be displayed
      3. all text will correspond with values from api
   1. else an alert will show which returns "not a valid city. let's try that again."
   1. The lat and lon from the first api will be saved and passed to the next api which will display the weather forecast.
      1. An icon will present a summary of the day eg. cloudy, sunny, rainy.

## Main focus

### Pass variables to use in second function

1. call both apis and get the second api to receive the lat and lon values.

### Get the weather to display on just the top section before the end of the day

2.

https://openweathermap.org/img/w/{weathericonid}.png
