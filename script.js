let signUp = document.getElementById("signUp");
let singIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");


singIn.onclick = function() {
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    signUp.classList.add("disable");
    singIn.classList.remove("disable");
}

signUp.onclick = function() {
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Sign up";
    signUp.classList.remove("disable");
    singIn.classList.add("disable");
}