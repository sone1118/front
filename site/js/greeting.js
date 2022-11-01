const loginForm = document.querySelector("#form1");
const loginInput = loginForm.querySelector(".name");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";
const APPEAR = "appear";

function showGreeting(userName) {
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
function showItems() {
    const right = document.querySelector("#right");
    const left = document.querySelector("#left");
    const quote = document.querySelector("#quote");
    left.classList.remove("col-sm-12");
    left.classList.add("col-sm-6");
    right.classList.toggle(HIDDEN_CLASSNAME);
    quote.classList.toggle(HIDDEN_CLASSNAME);
    left.classList.add(APPEAR);
    right.classList.add(APPEAR);
    quote.classList.add(APPEAR);
}

function onSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    showGreeting(userName);
    showItems();
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    //로그인 보여줌
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onSubmit);
} else {
    //바로 h1창 보여준다
    showGreeting(savedUserName);
    showItems();
}