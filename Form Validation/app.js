// function for id and class selection
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);


let form = id("form");
let username = id("username");
let email = id("email");
let password = id("password");
let errorMsg = classes("error");
let succI = classes("succes_i");
let failI = classes("fail_i");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    validateForm(username, 0,"username");
    validateForm(email,1,"email");
    validateForm(password,2,"password");

});


let validateForm = (id, position, message)=>{
    message += " cannot be empty!";
    if(id.value == "") {
        errorMsg[position].innerHTML = message;
        failI[position].style.opacity = 1;
        succI[position].style.opacity = 0;
    }
    else {
        errorMsg[position].innerHTML = "";
        failI[position].style.opacity = 0;
        succI[position].style.opacity = 1;
    }

}