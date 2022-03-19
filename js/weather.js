const API_KEY = "62c108f891a56d99a8d998ac86056444";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response=>response.json()).then(data=>{
        const cityContainer = document.querySelector("#weather span:first-child");
        const weatherContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = `YOUR CITY "${data.name}"`;
        weatherContainer.innerText = `NOW ON ${data.weather[0].main}`;
    });
}

function onGeoError(){
    alert("CAN'T FIND YOU.\nNO WEATHER FOR YOU.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
