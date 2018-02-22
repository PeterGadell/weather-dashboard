fetch("http://api.openweathermap.org/data/2.5/weather?q=Stockholm,Sweden&units=metric&APPID=df554254794deae3332a19d6547872cf").then((response) => {
  return response.json()
}).then((json) => {
  document.getElementById("city").innerHTML = (json.name)
  document.getElementById("temperature").innerHTML = Math.ceil(json.main.temp) + "°"
  document.getElementById("type").innerHTML = (json.weather[0].description)
  if (json.main.temp < 10) {
    document.getElementById("body").classList.toggle("cold")
} else {
    document.getElementById("body").classList.toggle("warm")
}
})
