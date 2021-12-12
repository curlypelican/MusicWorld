const form = document.querySelector('#account form');
const eField = form.querySelector('#account .email');
const eInput = eField.querySelector('#account input');
const pField = form.querySelector('#account .password');
const pInput = pField.querySelector('#account input');

form.onsubmit = e => {
    e.preventDefault();
    if (eInput.value == '') {
        eField.classList.add('shake', 'error');
    } else {
        checkEmail();
    }

    if (pInput.value == '') {
        pField.classList.add('shake', 'error');
    }

    setTimeout(() => {
        eField.classList.remove('shake');
        pField.classList.remove('shake');
    }, 500);

    eInput.onkeyup = () => {
        checkEmail();
    };
    pInput.onkeyup = () => {
        if (pInput.value == '') {
            eField.classList.add('error');
        } else {
            pField.classList.remove('error');
        }
    };

    if (!eField.classList.contains('error') && !pField.classList.contains('error')) {
        window.location.href = form.getAttribute('action');
    }

    function checkEmail () {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add('error');
            let errorTxt = eField.querySelector('.error-txt');
            (eInput.value != '') ? errorTxt.innerText = 'Введите правильный адрес' : 'Это поле не может быть пустым';
        } else {
            eField.classList.remove('error');
        }
    }
};
