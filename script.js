var cityName;

// created variable for API key
var apiKey = "ba17ab7e50334efbdf75c59b609ec00e";
var baseUrlForOneDay =
  "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&q=";

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
      // takes the response data and converts it tot he data you wanted
      return response.json();
    })
    .then(function (bacon) {
      console.log(bacon); // sanity check

      // extract the data we want for today

      // put it somewhere on the screen


      // extract the lat and lon from the data
var lon = bacon.coord.lon
var lat = bacon.coord.lat
      // use it to create the other url
      var baseUrlForFiveDay = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey

      // make a call to the other url
      // -- then turn the response data into real data
      // -- then 
      // -- -- log the data
      // -- -- extract the info you want from the data
      // -- -- put it on the screen
    });
});
