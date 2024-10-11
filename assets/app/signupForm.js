import './firebase.js';

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showMessage.js';

const signupForm = document.querySelector('#register');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['register-email'].value;
    const password = signupForm['register-password'].value;
    const passwordConfirm = signupForm['register-confirm-password'].value;

    // Verifica que las contraseñas coincidan
    if (password === passwordConfirm) {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            window.location.href = 'principal.html';
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                showMessage("This email already exists", "error");
            } else if (error.code === 'auth/invalid-email') {
                showMessage("Email invalid", "error");
            } else if (error.code === 'auth/weak-password') {
                showMessage("Insecure password", "error");
            } else if (error.code) {
                showMessage("Something went wrong", "error");
            }
        }
    } else {
        showMessage("passwords do not match", "error");
    }
});