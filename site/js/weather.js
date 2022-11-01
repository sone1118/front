const API_KEY = "8def142e26354b9bb3effa2791d5f95e";

function onGeoOk(position) {
    // const lat = position.coords.latitude;
    // const lon = position.coords.longitude;
    // const url = `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}&units=metric`; 

    fetch(url)
    .then((response)=> response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        weather.innerText = data.weather[0].main;
        temp.innerText = `${Math.floor(data.main.temp)}°C`;
    })
    .catch((error) => {
        const weather = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = "No sign";
        console.log(error);
    });
}

function onGeoError() {
    console.log("Can't find you. No Weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);