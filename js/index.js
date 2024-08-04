const form = {
    email: () => document.getElementById('email'),
    password: () => document.getElementById('password'),
    emailError: () => document.getElementById('email-error'),
    emailInvalid: () => document.getElementById('email-invalid'),
    passwordError: () => document.getElementById('password-error'),
}

function onchangeEmail() {
    toggleButtonsDisabled()
    toggleEmailError()
}

function onchangePassword() {
    toggleButtonsDisabled()
    togglePasswordError()
}

function isPasswordValid() {
    const password = form.password().value;
    return password.trim() !== ''
}

function isEmailValid() {
    const email = form.email().value
    return validateEmail(email)
}

function toggleEmailError() {
    const email = form.email().value

    form.emailError().style.display = email ? 'none' : 'block'
    form.emailInvalid().style.display = validateEmail(email) ? 'none' : 'block'
}

function togglePasswordError() {
    const password = form.password().value

    form.passwordError().style.display = password ? 'none' : 'block'
}

function toggleButtonsDisabled() {
    const emailValid = isEmailValid()
    const passwordValid = isPasswordValid()

    document.getElementById('enter').disabled = !(emailValid && passwordValid)
}

function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
}

document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault()
    window.location.href = 'home.html'
})