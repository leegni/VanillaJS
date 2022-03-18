const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingTexts = ["Hi","Welcome","Nice to meet you", "Hello", "Good to see you", "How do you do", "How have you been"];

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const chosenText = greetingTexts[Math.floor(Math.random() * greetingTexts.length)];
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `${chosenText} ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername===null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}