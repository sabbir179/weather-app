
// data load from api
const searchBtn = document.getElementById('submit');
searchBtn.addEventListener('click', function(){
    const searchCity = document.getElementById('input-value').value;
    let apiKey = "4679e72af906d4430f8d4698d94f5191"
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            // data display on the website.
            const cityName = document.getElementById('city').innerText = data.name;

            // 1 deg C = 273.15 ; c = k - 273

            const temp = document.getElementById('input-temp').innerText = Math.round(data.main.temp - 273.15);
            const desc = document.getElementById('discreption').innerText = data.weather[0].main;
        })
})