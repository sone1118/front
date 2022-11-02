const hour = document.querySelector("#hr");
const minute = document.querySelector("#mn");
const second = document.querySelector("#sc");
const DEG = 6;
const START_DEG = 180;

function setTime() {
    const date = new Date();
    const hour_deg = START_DEG + date.getHours() * 30;
    const minute_deg = START_DEG + date.getMinutes() * DEG;
    const second_deg = START_DEG + date.getSeconds() * DEG;
    hour.style.transform = `rotateZ(${hour_deg}deg)`;
    minute.style.transform = `rotateZ(${minute_deg}deg)`;
    second.style.transform = `rotateZ(${second_deg}deg)`;
}
setTime();
setInterval(setTime, 1000);