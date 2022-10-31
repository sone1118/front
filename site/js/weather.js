const API_KEY = "8def142e26354b9bb3effa2791d5f95e";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    //이친구는promise임
    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        city.innerText = data.name;
    })
    .catch((error) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = "No sign";
        city.innerText = "No sign";
        console.log(error);
    });
}

function onGeoError() {
    console.log("Can't find you. No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);