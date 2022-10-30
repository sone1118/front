const circle = document.querySelector(".wrapper .circle");
   
const handleCircleClick = function() {
     const text = document.querySelector(".circle .text");
    // const newName = "spin";
    // const newText = "on";

    // if(circle.classList.contains(newName)) {
    //     circle.classList.remove(newName);
    //     text.classList.remove(newText);
    //     text.innerHTML = "ON";
    // }else {
    //     circle.classList.add(newName);
    //     text.classList.add(newText);
    //     text.innerHTML = "OFF";
    // }
    
    circle.classList.toggle("spin");
    text.classList.toggle("on");
    text.innerHTML = (text.innerHTML === "ON")? "OFF" : "ON";
};

circle.addEventListener("click", handleCircleClick);

