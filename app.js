//  api key : c89d413c640015ab57dba2fd03f193b9

var retrievedData = JSON.parse(localStorage.getItem("savedCities"));
var cities = retrievedData || [];
var city = "";

function searchCity(city) {
  var queryURL =
    "https:api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=c89d413c640015ab57dba2fd03f193b9";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var cityName = response.name;
    var tempP = response.main.temp;
    var humidityP = response.main.humidity;
    var windSpeedP = response.wind.speed;
    $("#cityName").html(cityName);
    $("#temp").html(`Temperature : ${tempP} F`);
    $("#humid").html(`Humidity : ${humidityP} %`);
    $("#windSpeed").html(`Wind Speed : ${windSpeedP}mph`);
  });
}
function forecast(city) {
  var queryUrlF =
    "http://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&units=imperial&appid=c89d413c640015ab57dba2fd03f193b9";

  $.ajax({
    url: queryUrlF,
    method: "GET"
  }).then(function(response_two) {
    console.log("forecast", response_two);
    displayForecast(response_two);
  });
}

function displayForecast(response_two) {
  for (i = 5; i < response_two.list.length; i += 8) {
    forecastDiv = $(
      `<div class="bds-o m-10px">
            
            <div>
              Temperature: ${response_two.list[i].main.temp}°F
            </div>
            <div>
              Humidity: ${response_two.list[i].main.humidity}%
            </div>
            <div>
              Wind: ${response_two.list[i].wind.speed}MPH
            </div>
        </div>`
    );
    // $("#forecastDisplay").replaceWith(forecastDiv)

    $("#forecastDisplay").append(forecastDiv);
  }
}

function renderButtons() {
  //delete cities prior to addin new cities
  $("#buttonStorage").empty();

  //looping through cities
  for (i = 0; i < cities.length; i++) {
    //generate button for each item in array
    var a = $('<button class="bd-n bgc-white">');
    //add class
    a.addClass("city");
    // add attribute
    a.attr("data-name", cities[i]);
    a.text(cities[i]);
    $("#buttonStorage").prepend(a);
  }
}

//assign var city and push to array
$("#select-city").on("click", function(event) {
  event.preventDefault();
  city = $("#weather-imput")
    .val()
    .trim();
  searchCity(city);
  forecast(city);
  // add city to array
  cities.push(city);
  localStorage.setItem("savedCities", JSON.stringify(cities));

  renderButtons();
});
$("form").submit(function(event) {
  event.preventDefault();

  city = $("#weather-imput")
    .val()
    .trim();
  searchCity(city);
  forecast(city);
  // add city to array
  cities.push(city);
  localStorage.setItem("savedCities", JSON.stringify(cities));

  renderButtons();
});
// ma
// make click event that will call former city back into search funtion

renderButtons();
$(".city").on("click", function() {
  city = $(this).data("name");
  searchCity(city);
  forecast(city);
});

//fucntion for 5 day forecast
