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

function fetchatlantaWeather() {}
    const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.open-meteo.com/v1/forecast?latitude=33.7501&current_weather=true&longitude=84.3885", requestOptions)
  .then((response) => response.json())
  .then(function(result){
    console.log(result);
    atlantaWeather = result;
    console.log(atlantaWeather);
    console.log(atlantaWeather.current_weather.temperature);
})
  .catch((error) => console.error(error));
  fetchatlantaWeather();
   function updateWeatherCard() {
        setText("temp", atlantaWeather.current.temperature);
        setText("windSpeed", atlantaWeather.current.windSpeed);

   }