$( document ).ready(function() {
  $("#forminput").submit(function(event){
    performSearch(event);
  });
});

function performSearch(event){
  var request;
  event.preventDefault();

  request =  $.ajax({
    url :'https://api.openweathermap.org/data/2.5/weather',
    type : 'GET',
    data : {
      q : $("#city").val(),
      appid : '2c476e538ecec946a44e8cc19a3effde',
      units : 'metric'
    }
  });

  request.done(function(response){
    formatSearch(response);
  });
}

function formatSearch(jsonObject){
  var  city_name = jsonObject.name;
  var city_weather = jsonObject.weather[0].main;
  var city_temp = jsonObject.main.temp;

  $("#result").text("Weather now in "+city_name+" is "+city_weather+" and the temperature is "+city_temp+" Celcius.");
}
