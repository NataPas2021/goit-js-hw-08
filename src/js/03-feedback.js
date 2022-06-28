import throttle from  "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputsData, 500));

dataOfStorage();

function onInputsData(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
    console.log(formData);
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function dataOfStorage() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if(data) {
        refs.input.value = data.email;
        refs.textarea.value = data.message;
    }
};