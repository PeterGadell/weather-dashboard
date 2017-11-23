fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=df554254794deae3332a19d6547872cf").then((response) => {
  return response.json()
}).then((json) => {
  document.getElementById("city").innerHTML = (json.name)
  document.getElementById("temperature").innerHTML = (json.main.temp) + "°C"
  document.getElementById("type").innerHTML = (json.weather[0].description)
})
