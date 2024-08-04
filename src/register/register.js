document.addEventListener("DOMContentLoaded", function () {
    const form = {
        name: () => document.getElementById('register-name'),
        email: () => document.getElementById('register-email'),
        date: () => document.getElementById('register-age'),
        password: () => document.getElementById('register-password'),
        passwordConfirm: () => document.getElementById('passwordC'),
        emailError: () => document.querySelector('.email-error'),
        emailInvalid: () => document.querySelector('.email-invalid'),
        passwordError: () => document.querySelector('.errorPassword')
    };

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePassword() {
        const password = form.password().value;
        const passwordConfirm = form.passwordConfirm().value;

        if (password !== passwordConfirm) {
            form.passwordConfirm().setCustomValidity("Senhas diferentes!");
            return false;
        } else {
            form.passwordConfirm().setCustomValidity("");
            return true;
        }
    }

    function toggleEmailError() {
        const email = form.email().value;

        form.emailError().style.display = email ? 'none' : 'block';
        form.emailInvalid().style.display = validateEmail(email) ? 'none' : 'block';
    }

    function togglePasswordError() {
        const password = form.password().value;
        const passwordValid = validatePassword();

        form.passwordError().style.display = password ? 'none' : 'block';
        form.passwordError().style.display = passwordValid ? 'none' : 'block';
    }

    function toggleButtonsDisabled() {
        const emailValid = validateEmail(form.email().value);
        const passwordValid = validatePassword();

        document.getElementById('enter').disabled = !(emailValid && passwordValid);
    }

    form.name().addEventListener("input", toggleButtonsDisabled);
    form.email().addEventListener("input", () => {
        toggleEmailError();
        toggleButtonsDisabled();
    });
    form.date().addEventListener("input", toggleButtonsDisabled);
    form.password().addEventListener("input", () => {
        togglePasswordError();
        toggleButtonsDisabled();
    });
    form.passwordConfirm().addEventListener("input", () => {
        togglePasswordError();
        toggleButtonsDisabled();
    });
});
