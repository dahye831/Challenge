function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const API_KEY = "eec4f33e29af69a6a4ae53075f4cb632";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  console.log(url);

  const weatherData = document.querySelectorAll(".data");
  console.log(weatherData[0]);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      const dataArray = [city, weather, temp];

      for (let i = 0; i < weatherData.length; i++) {
        weatherData[i].innerHTML = dataArray[i];
      }
    });
}
function error(error) {
  alert(`ERROR(${error.code}): ${error.message}`);
}

navigator.geolocation.getCurrentPosition(success, error);
