var cityName;

// created variable for API key
var apiKey = "ba17ab7e50334efbdf75c59b609ec00e";
var baseUrlForOneDay =
  "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&units=imperial&q=";

// Reach into the HTMl and grab the search button
var searchBtn = document.querySelector(".search");
console.log(searchBtn);
console.dir(searchBtn);
// Listen for a click
searchBtn.addEventListener("click", function () {
  // Reach into the html to grab the input element
  var searchInputEl = document.querySelector(".search-text");
  // Look at the element we grab to see what properties we can use
  console.dir(searchInputEl);
  // extract the data that we wanted out of the object
  cityName = searchInputEl.value;
  console.log(cityName);

  var url = baseUrlForOneDay + cityName;

  // use city name to make the http call
  fetch(url)
    .then(function (response) {
      console.log(response);
      // takes the response data and converts it to the data you wanted
      return response.json();
    })
    .then(function (data) {
      console.log(data); // sanity check
document.getElementById("city-name").textContent = data.name 
document.getElementById("temp-main").textContent = data.main.temp+" F"
document.getElementById("humid-main").textContent = data.main.humidity+"%"
document.getElementById("wind-main").textContent = data.wind.speed+" MPH"

      // extract the lat and lon from the data
var lon = data.coord.lon
var lat = data.coord.lat
      // use it to create the other url
      var baseUrlForFiveDay =
       "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
       fetch(baseUrlForFiveDay)
       .then((response) => response.json())
       .then(function (data) {
         console.log(data)
    });
})})
