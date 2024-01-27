
let id = (id)=> document.getElementById(id);

let classes = (classes)=> document.getElementsByClassName(classes);


let form = id("form"),
    username = id("name"),
    email = id("email"),
    password = id("password"),
    btn = id("submitBtn"),
    fail_i = classes("fail_i"),
    succes_i = classes("succes_i"),
    errorMsg = classes("error");


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validateForm(username,0,"username");
    validateForm(email,1,"email");
    validateForm(password,2,"password");
})


let validateForm = (id, serial, message)=>{
    message += " cannot be empty!"
    if(id.value===''){
        errorMsg[serial].innerHTML = message;
        fail_i[serial].style.opacity = 1;
        succes_i[serial].style.opacity = 0;
    }
    else {
        errorMsg[serial].innerHTML = "";
        fail_i[serial].style.opacity = 0;
        succes_i[serial].style.opacity = 1;
        
    }
}
