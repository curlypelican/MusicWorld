const form2 = document.getElementById('form2');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form2.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    if(usernameValue === '') {
        setErrorFor(username, 'Это поле не может быть пустым');
    } else {
        setSuccessFor(username);
    }
    if(emailValue === '') {
        setErrorFor(email, 'Это поле не может быть пустым');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Некорректный адрес почты');
    } else {
        setSuccessFor(email);
    }
    
    if(passwordValue === '') {
        setErrorFor(password, 'Это поле не может быть пустым');
    } else {
        setSuccessFor(password);
    }
    
    if(password2Value === '') {
        setErrorFor(password2, 'Это поле не может быть пустым');
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Пароли не совпадают');
    } else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
    
function isEmail(email) {
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}
