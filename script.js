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
  var cityName = searchInputEl.value;
  console.log(cityName);

  var url = "https://pokeapi.co/api/v2/pokemon/" + cityName

  // use city name to make the http call
  fetch(url)
    .then(function (response) {
      console.log(response);
      // takes the response data and converts it tot he data you wanted
      return response.json();
    })
    .then(function (data) {
      console.log(data); // sanity check

      // extract the data we want
      var imageUrl = data.sprites.front_default;

      // put it somewhere on the screen
      document.querySelector('#pkmn').src = imageUrl
    });
});
