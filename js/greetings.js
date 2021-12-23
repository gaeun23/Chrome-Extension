const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDNE_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDNE_CLASSNAME);
    const username = loginInput.value
    localStorage.setItem(KEY_USERNAME, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.classList.remove(HIDDNE_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if(savedUsername === null){
    loginForm.classList.remove(HIDDNE_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}