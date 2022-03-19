const before = document.querySelector(".before");
const after = document.querySelector(".after");
const nameInput = before.querySelector("#nameInput");
const signInBtn = before.querySelector("#signInBtn");
const greeting = document.querySelector("#greeting");
const greetingTexts = ["HI","WELCOME","NICE TO MEET YOU", "HELLO", "GOOD TO SEE YOU", "HOW DO YOU DO"];

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const chosenText = greetingTexts[Math.floor(Math.random() * greetingTexts.length)];
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSignInBtnClick(event){
    event.preventDefault();
    before.classList.add(HIDDEN_CLASSNAME);

    const username = nameInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `${chosenText} ${username}!`;
    after.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername===null){
    before.classList.remove(HIDDEN_CLASSNAME);
    signInBtn.addEventListener("click",onSignInBtnClick);
}else{
    before.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
