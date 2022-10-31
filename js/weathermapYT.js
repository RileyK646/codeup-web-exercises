const timeE = document.getElementById('time')
const dateE = document.getElementById('date')
const currentWeatherItemsE = document.getElementById("current-weather-items")
const timezone = document.getElementById("time-zone")
const countryE = document.getElementById('country')
const weatherForcastE = document.getElementById("weather-forecast")
const currentTempE = document.getElementById('current-temp')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept' , 'Oct', 'Nov', 'Dec'];
setInterval(() => {
    const time = new Date();
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const hours24 = hour >= 113 ? hour % 12 : hour
    const ampm = hour >= 12 ? 'PM' : 'AM'

        dateE.innerHTML =  days[day] + ', ' + date + ' ' + months[month]
    timeE.innerHTML = hours24 + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`
}, 1000);
function getWeather() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success)

        let {latitude, longitude} = success.coords;
        fetch(`api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openweatherKey}`).then(res => res.json()).then(data => {
            console.log(data)
        })
    })
}
getWeather()
function showWeatherData(data) {

}