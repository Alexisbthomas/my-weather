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

temp.addEventListener("click", myFunction);

function myFunction() {
  alert ("Weather Alert!");
}

function fetchSeattleWeather() {
  const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.open-meteo.com/v1/forecast?latitude=47.61&current_weather=true&longitude=-122.33", requestOptions)
  .then((response) => response.json())
  .then(function(result){
   console.log(result);
   seattleWeather = result;
   console.log(seattleWeather);
   console.log(seattleWeather.current_weather.temperature);
  })
  .catch((error) => console.error(error));
  }
fetchseattleWeather();
   function updateWeatherCard() {
        setText("temp", seattleWeather.current.temperature);
        setText("windSpeed", seattleWeather.current.windSpeed);

   }
