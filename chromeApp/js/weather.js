function onSuccess(position) {
  const lat = position.coords.latitude; 
  const lon = position.coords.longitude;
  console.log(lat, lon)
  
  const API_KEY = "eec4f33e29af69a6a4ae53075f4cb632";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
  console.log(url);
  fetch(url).then(response => response.json()).then(data => {
    console.log(data.name)
    const weather = document.querySelector('.weather_degress');
    const city = document.querySelector('.weather_city');
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innerText = data.name;
  })

}
function onError(error) {
  alert(`ERROR(${error.code}): ${error.message}`)
}
navigator.geolocation.getCurrentPosition(onSuccess, onError)