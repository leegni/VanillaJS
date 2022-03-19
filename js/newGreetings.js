const before = document.querySelector(".before");
const after = document.querySelector(".after");
const nameInput = before.querySelector("#nameInput");
const signInBtn = before.querySelector("#signInBtn");
const greeting = document.querySelector("#greeting");
const greetingTexts = ["HI","WELCOME","NICE TO MEET YOU", "HELLO", "GOOD TO SEE YOU", "HOW DO YOU DO","HOW YOU DOIN'","WHAT'S UP","IT'S ALL GOOD?"];

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const chosenText = greetingTexts[Math.floor(Math.random() * greetingTexts.length)];
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSignInBtnClick(event){
    event.preventDefault();

    const username = nameInput.value;
    if(username===""||username===null){
        alert("WHAT IS YOUR NAME?");
        return;
    }
    before.classList.add(HIDDEN_CLASSNAME);

    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function onSignOutBtnClick(){
    if(confirm("WHEN YOU SIGN OUT, \nTHE LIST WILL BE DELETED.")){
        localStorage.removeItem(USERNAME_KEY);
        localStorage.removeItem("todos");
        location.reload();
    }else{
        return;
    }
}

function paintGreetings(username){
    greeting.innerText = `${chosenText} ${username}!`;
    after.classList.remove(HIDDEN_CLASSNAME);
    const btn = document.createElement("button");
    btn.innerText="SIGN OUT";
    btn.classList.add("button-10");
    btn.addEventListener("click", onSignOutBtnClick);
    greeting.appendChild(btn);
}

if(savedUsername===null){
    before.classList.remove(HIDDEN_CLASSNAME);
    signInBtn.addEventListener("click",onSignInBtnClick);
}else{
    before.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}
