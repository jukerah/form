let inputName = document.getElementById('name');
inputName.addEventListener('keyup', () => {                     
    validateName();
});
const validateName = () => {
    let total = (inputName.value).length;
    if (total < 2) { 
        inputName.classList.add("not-validated-input");
        inputName.classList.remove("validated-input");
    } else {  
        inputName.classList.remove("not-validated-input");
        inputName.classList.add("validated-input");
    }
}

let inputEmail = document.getElementById('email');
inputEmail.addEventListener('keyup', () => {                     
    validateEmail(inputEmail.value);
});
const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    if (!(re.test(email))) {
        inputEmail.classList.add("not-validated-input");
        inputEmail.classList.remove("validated-input");
    } else {
        inputEmail.classList.remove("not-validated-input");
        inputEmail.classList.add("validated-input");
    }
}

let inputPassword = document.getElementById('password');
inputPassword.addEventListener('keyup', () => {                     
    validatePassword();
});
const validatePassword = () => {
    let total = (inputPassword.value).length;
    if (total < 8) { 
        inputPassword.classList.add("not-validated-input");
        inputPassword.classList.remove("validated-input");
    } else {  
        inputPassword.classList.remove("not-validated-input");
        inputPassword.classList.add("validated-input");
    }
}

let inputDtNasc = document.getElementById('dtNasc');
inputDtNasc.addEventListener('keyup', () => {                     
    validateDtNasc();
});
inputDtNasc.addEventListener('change', () => {                     
    validateDtNasc();
});
const validateDtNasc = () => {
    let total = (inputDtNasc.value).length;
    if (total != 10) { 
        inputDtNasc.classList.add("not-validated-input");
        inputDtNasc.classList.remove("validated-input");
    } else {  
        inputDtNasc.classList.remove("not-validated-input");
        inputDtNasc.classList.add("validated-input");
    }
}