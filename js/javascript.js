//for emailvalidation for admin//
function emailValidation() {
    var form = document.getElementById("cnt-login");
    var email = document.getElementById("email1").value;
    var text = document.getElementById("text1");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid email found";
        text.style.color = "white";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "InValid email found";
        text.style.color = "red";
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "red";
    }
}
//email validation for customer//
function emailValidate() {
    var form = document.getElementById("cnt-login3");
    var email = document.getElementById("email2").value;
    var text = document.getElementById("text3");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid email found";
        text.style.color = "white";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "InValid email found";
        text.style.color = "red";
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "red";
    }
}
//email validaation for sign in//
function emailValidated() {
    var form = document.getElementById("cnt-login6");
    var email = document.getElementById("email3").value;
    var text = document.getElementById("text6");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid email found";
        text.style.color = "white";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "InValid email found";
        text.style.color = "red";
    }
    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "red";
    }
}
//password validation for admin//
function passwordValidation() {
    var form = document.getElementById("cnt-login1");
    var password = document.getElementById("password1").value;
    var text = document.getElementById("text2");
    if (password.length >= 7) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid password found";
        text.style.color = "white";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "your password is weak";
        text.style.color = "red";
    }
    if (password == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "red";
    }
}
//password validation for customer//
function passwordValidated() {
    var form = document.getElementById("cnt-login4");
    var password = document.getElementById("password2").value;
    var text = document.getElementById("text4");
    if (password.length >= 7) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Valid password found";
        text.style.color = "white";
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "your password is weak";
        text.style.color = "red";
    }
    if (password == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "red";
    }
}
//sign up//
function passwordValidate() {
    let password = document.getElementById("password3").value;
    let confirm = document.getElementById("password4").value;
    console.log(password, confirm);
    let message = document.getElementById("message");
    if (password.length != 0) {
        if (password == confirm) {
            //message.innerHTML = "passwords match";
            var textToAdd = document.createTextNode("passwords match");
            message.appendChild(textToAdd);
            message.style.backgroundcolor = "white";
        } else {
            //message.innerHTML = "passwords dont match";
            var textToAdd = document.createTextNode("passwords don't match");
            message.appendChild(textToAdd);
            message.style.backgroundcolor = "white";

        }
    }
}

function alert() {
    alert("login or sign in to view more items!");
}