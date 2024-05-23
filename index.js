const submit = document.getElementById('submit');
const names = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const age = document.getElementById('age')
const cnic = document.getElementById('cnic')
let nameRegex = /^[A-Za-z]{4,15}$/;
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordregex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{9}$/;
let cnicRegex = /^42\d{11}$/;
let ageregex = /^(2[0-9]|[3-4][0-9]|60)$/;
submit.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(nameRegex.test(names.value)){
    console.log(names.value);
    }
    if(cnicRegex.test(cnic.value)){
        console.log(cnic.value);
    }
    if(emailRegex.test(email.value)){
       console.log(email.value);  
    }
    if(passwordregex.test(password.value)){
        console.log(password.value);
    }
    if(ageregex.test(age.value)){
        console.log(age.value);
    }

})