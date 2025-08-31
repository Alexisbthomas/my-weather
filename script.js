
  var newOrleansWeather=  {
    "current_weather": {
        "time": "2025-08-29T22:30",
        "interval": 900,
        "temperature": 25.4,
        "windspeed": 2.3,
        "winddirection": 309,
        "is_day": 1,
        "weathercode": 3
    }
}
onEvent("Weather", "click", function(){
setText("temp", newOrleansWeather.current_weather.temperature);
setText("wind", newOrleansWeather.current_weather.windspeed);
setText("code", newOrleansWeather.current_weather.weathercode);
})

function fetchNewOrleansWeather() {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
    };

fetch("https://api.open-meteo.com/v1/forecast?latitude=29.95&current_weather=true&longitude=-90.07", requestOptions)
  .then((response) =>response.json() )
  .then(function(result){
    console.log(result);
    newOrleansWeather = result;
    console.log(newOrleansWeather);
    console.log(newOrleansWeather.current_weather.temperature);
})
  .catch((error) => console.error(error));
}

 fetchNewOrleansWeather();
 function updateWeatherCard() {
        setText("temp", newOrleansWeather.current.temperature);
        setText("windSpeed", newOrleansWeather.current.windSpeed);

    }