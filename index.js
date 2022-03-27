
var formEl = document.querySelector('form');
var locationInput = document.querySelector('input[type=text]');
var weatherLog = document.getElementById('weather');




formEl.onsubmit = function(e){
    e.preventDefault()
    fetch('https://api.openweathermap.org/data/2.5/weather?id=524901&appid=e96f78fb54ab52579081833f456f29e6')
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log('Error!', err)
    })
    
}





// form onsubmit, formData obj
//formEl.onsubmit = function(e) {
  //  e.preventDefault()
    //var formData = new FormData(e.target)
    //console.log(formData.get('location'))
    //console.log(Object.fromEntries(formData))
  //}
  
  // form submit event listener, input elements
  //formEl.addEventListener('submit', function(e) {
    //e.preventDefault()
    //var name = locationInput.value
    //console.log("event listener", {location})
  //})


