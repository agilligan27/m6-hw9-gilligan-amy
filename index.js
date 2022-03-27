
var form = document.querySelector('form');
var locationInput = document.querySelector('input[type=text]');
var weatherLog = document.getElementById('weather');

var iconUrl = 'http://openweathermap.org/img/wn/'

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

        var div = document.createElement('div');
        var h2 = document.createElement('h2');
        h2.textContent = res.name + " , " + res.sys.country;
        div.appendChild(h2)
        weatherLog.appendChild(div)

        var icon = document.createElement('img');
        div.appendChild(icon);
        icon.src= iconUrl + res.weather[0].icon + '@2x.png'

        var description = document.createElement('p');
        description.textContent = res.weather[0].description;
        div.appendChild(description);

        var p = document.createElement('p');
        p.textContent = 'Current Temperature: ' + res.main.temp + ' degrees Fahrenheit';
        div.appendChild(p);

        var p2 = document.createElement('p');
        p2.textContent = 'Feels Like: ' + res.main.feels_like + ' degrees Fahrenheit';
        div.appendChild(p2);

    })

    
}




