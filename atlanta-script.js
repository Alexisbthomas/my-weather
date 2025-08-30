var atlantaWeather=  {
    "current_weather": {
        "time": "2025-08-29T22:45",
        "interval": 900,
        "temperature": 26.6,
        "windspeed": 15.1,
        "winddirection": 152,
        "is_day": 1,
        "weathercode": 0
    }
}
onEvent("Weather", "click", function(){
setText("temp", atlantaWeather.current_weather.temperature);
setText("wind", atlantaWeather.current_weather.windspeed);
setText("code", atlantaWeather.current_weather.weathercode);
})