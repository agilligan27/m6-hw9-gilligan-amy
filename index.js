
var form = document.querySelector('form');
var locationInput = document.querySelector('input[type=text]');
var weatherLog = document.getElementById('weather');

var api = 'https://api.openweathermap.org/data/2.5/weather?'
var apiKey = '&units=imperial&appid=e96f78fb54ab52579081833f456f29e6'


form.onsubmit = function(e) {
    e.preventDefault();
    var location = locationInput.value;
    fetch(api + 'q=' + location + apiKey)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        console.log(res);
        var city = res.name;
        var country = res.sys.country;
        var description = res.weather[0].description;
        var currentTemperature = res.main.temp;
        var feelsLike = res.main.feels_like;
        console.log(city, country, description, currentTemperature, feelsLike)

    })

    
}




