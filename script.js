const menu = document.querySelector (".menu");
const userName = document.querySelector ("#username");
const password = document.querySelector ("#password");
const logInBtn = document.querySelector ("#loginbtn");
const content = document.querySelector (".content");
const wrongLogin = document.querySelector ("#wronglogin");
const rightLogin = document.querySelector ("#rightlogin");

const chosenUser = "fredrik";
const chosenPassword = "12345";

logInBtn.addEventListener ("click", checkInfo);

function checkInfo() {
    if (userName.value == chosenUser && password.value == chosenPassword) {
        renderSuccessfulUI
    } else {
        renderFailUI()
    }
}

renderSuccessfulUI() {
    menu.style.display = "none";
    rightLogin.style.display = "block";
    rightLogin + "" + "Fredrik!";
}

renderFailUI() {
    menu.style.display = "none";
    wrongLogin.style.display = "block";
}


