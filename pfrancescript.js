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

function fetchpFranceWeather() {
   const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.open-meteo.com/v1/forecast?latitude=48.8584&current_weather=true&longitude=2.2945", requestOptions)
  .then((response) => response.json())
  .then(function(result){
   console.log(result);
   pFranceWeather = result;
   console.log(pFranceWeather);
   console.log(pFranceWeather.current_weather.temperature);

  })
  .catch((error) => console.error(error));;
  }
  fetchpFranceWeather();
   function updateWeatherCard() {
        setText("temp", pFranceWeather.current.temperature);
        setText("windSpeed", pFranceWeather.current.windSpeed);
    }