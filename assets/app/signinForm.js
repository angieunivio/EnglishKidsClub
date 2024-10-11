import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from './showMessage.js';

const signInForm = document.querySelector('#login');

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        window.location.href = 'principal.html';
    } catch (error) {
        console.log(error)
        if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error");
        } else if (error.code === 'auth/missing-password') {
            showMessage("Missing password", "error");
        } else if (error.code === 'auth/invalid-credential') {
            showMessage("Invalid credential", "error");
        }
    }
});