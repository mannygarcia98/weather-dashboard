# Weather Dashboard

[https://mannygarcia98.github.io/weather-dashboard/](https://mannygarcia98.github.io/weather-dashboard/)

## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the OpenWeather One Call API (Links to an external site.) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use localStorage to store any persistent data.

## User Story

AS A traveler

I WANT to see the weather outlook for multiple cities

SO THAT I can plan a trip accordingly

## Acceptance Criteria

GIVEN a weather dashboard with form inputs

WHEN I search for a city

THEN I am presented with current and future conditions for that city and that city is added to the search history

WHEN I view current weather conditions for that city

THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

WHEN I view the UV index

THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

WHEN I view future weather conditions for that city

THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

WHEN I click on a city in the search history

THEN I am again presented with current and future conditions for that city

## Mock-up

The following image shows the web application's appearance and functionality.
![image](./images/06-server-side-apis-homework-demo.png)

## Technical Acceptance Criteria: 40%

Satisfies all of the above acceptance criteria plus the following:

Uses the OpenWeather API to retrieve weather data

Uses localStorage to store persistent data
