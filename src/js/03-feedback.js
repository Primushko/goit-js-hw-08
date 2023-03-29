import throttle from "lodash.throttle";

const form = document.querySelector(`.feedback-form`);
const emailInput = form.querySelector(`input[name="email"]`);
const messageInput = form.querySelector(`textarea[name="message"]`);

const saveStateToLocalStorage = () => {
    const state = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(`feedback-form-state`, JSON.stringify(state));
};

const loadStateFromLocalStorage = () => {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const state = JSON.parse(savedState);
        emailInput.value = state.email;
        messageInput.value = state.message;
    }
};

const clearFormAndLocalStorage = () => {
    const state = {
    email: ' ',
    message: ' ',
    };
    localStorage.removeItem('feedback-form-state');
    emailInput.value = state.email;
    messageInput.value = state.message;
    console.log('Form submitted with values:', state);
};

emailInput.addEventListener('input', throttle(saveStateToLocalStorage, 500));
messageInput.addEventListener('input', throttle(saveStateToLocalStorage, 500));

form.addEventListener('submit', (event) => {
    event.preventDefault();
    clearFormAndLocalStorage();
});

// pfdjdjdj
loadStateFromLocalStorage();
