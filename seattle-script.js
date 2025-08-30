var seattleWeather={
"current_weather": {
        "time": "2025-08-29T22:30",
        "interval": 900,
        "temperature": 21.0,
        "windspeed": 2.9,
        "winddirection": 270,
        "is_day": 1,
        "weathercode": 3
    }
}


onEvent("Weather", "click", function(){
setText("temp", seattleWeather.current_weather.temperature);
setText("wind", seattleWeather.current_weather.windspeed);
setText("code", seattleWeather.current_weather.weathercode);
})

element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Weather Alert!");
}