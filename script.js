
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