const API_KEY = "62c108f891a56d99a8d998ac86056444";
//6c5d876d73892996368b6bc3a9cd2d4e
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const cityContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);