//  api key : c89d413c640015ab57dba2fd03f193b9

$(document).ready(function() {
  function searchCity(city) {
    var queryURL =
      "https:api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=c89d413c640015ab57dba2fd03f193b9";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
      var cityName = response.name;
      var tempP = response.main.temp;
      var humidityP = response.main.humidity;
      $("#cityName").html(cityName);
      $("#temp").html(`Temperature : ${tempP}`);
      $("#humid").html(`Humidity : ${humidityP}`);
    });
  }
  // var weatherInfo = parseWeatherInfo(response);
  // $("#currentWeather").append(weatherInfo);

  // function parseWeatherInfo(response) {
  //   //p factory
  //   var weatherDiv = $("<div>");
  //   //create and save weather references
  //   var cityName = $(`<h3> ${response.name} </h3>`);
  //   var tempP = $(`<p> Temperature : ${response.main.temp}</p>`);
  //   var humidityP = $(`<p> Humidity : ${response.main.humidity}</p>`);
  //   //append elements to div
  //   weatherDiv.append(cityName);
  //   weatherDiv.append(tempP);
  //   weatherDiv.append(humidityP);

  //   return weatherDiv;
  // }

  $("#select-city").on("click", function(event) {
    event.preventDefault();
    var city = $("#weather-imput")
      .val()
      .trim();
    console.log("city name  " + city);
    searchCity(city);
  });
});
