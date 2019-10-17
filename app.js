$(document).ready(function() {
  /* db */
  /* raw weather object from api */
  var cityWeather =
    "https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22";

  /* variables */
  /* parsed weather object */

  /* utility functions */
  /* get raw data */
  /* parse raw data */
  /* render parsed data */

  /* event functions */
  /* search button click */
  /* have city name  */
  /* send city name to a openweather api */
  /* set the weather info to the object returned (see raw data) */

  /* init */
  $.ajax({
    url: cityWeather,
    method: "GET"
  }).then(function(response) {
    // Create and save a reference to new empty table row
    console.log(response);
  });
  /* check local storage for history of cities and render */
  $(document).ready(function() {
    $.ajax({
      url: "https://openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22",
      method: "GET"
    }).then(function(response) {
      console.log(response);
      /* parse data */
    });
});