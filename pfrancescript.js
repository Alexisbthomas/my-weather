var pFranceWeather={
"current_weather": {
        "time": "2025-08-29T22:45",
        "interval": 900,
        "temperature": 16.9,
        "windspeed": 7.0,
        "winddirection": 235,
        "is_day": 0,
        "weathercode": 1
    }
    }


onEvent("Weather", "click", function(){
setText("temp", pFranceWeather.current_weather.temperature);
setText("wind", pFranceWeather.current_weather.windspeed);
setText("code", pFranceWeather.current_weather.weathercode);
})