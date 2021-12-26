const API_KEY ="00068b8354f29adf7dbc81e96f476265";

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json().then(data => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.list[1].name;
        weatherContainer.innerText  = `${data.list[1].main.temp}º ${data.list[1].weather[0].main}` ;
    }));
}

function onGeoError() {alert("Can't find you. No weather for you.");}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);