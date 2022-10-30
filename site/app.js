const circle = document.querySelector(".wrapper .circle");

const handleWindowOffline = function() {
    circle.className = "circle-spin";
    document.querySelector(".wrapper .circle-spin .circle-text").innerHTML = "OFF";
};

const handleWindowOnline = function() {
    circle.className = "circle";
    document.querySelector(".wrapper .circle .circle-text").innerHTML = "WIFI ON"
};
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
