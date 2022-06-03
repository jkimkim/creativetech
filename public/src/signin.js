import '../style2.css'
import '../assets/halfmoon-1.1.1/css/halfmoon.css'
import '../assets/fontawesome/css/all.css'

import regeneratorRuntime from "regenerator-runtime";

import {
    hideLoginError,
    showLoginState,
    showLoginError,
    btnLogin,
    btnSignup,
    btnLogout,
    txtEmail,
    txtPassword
} from './ui2.js';

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    connectAuthEmulator
} from 'firebase/auth';

const firebaseApp = initializeApp({
    apiKey: "AIzaSyCgM7WgX0FDbv5h8n9q-l_pYZZpFF2lj6I",
    authDomain: "jkimtech.firebaseapp.com",
    databaseURL: "https://jkimtech-default-rtdb.firebaseio.com",
    projectId: "jkimtech",
    storageBucket: "jkimtech.appspot.com",
    messagingSenderId: "682045885586",
    appId: "1:682045885586:web:de5ce24c219008f6d4aa4b",
    measurementId: "G-FJ7EGGLBGJ"
});

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

// Login using email/password
const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value
    const loginPassword = txtPassword.value

    // step 1: try doing this w/o error handling, and then add try/catch
    await signInWithEmailAndPassword(auth, loginEmail, loginPassword)

    // step 2: add error handling
    // try {
    //   await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    // }
    // catch(error) {
    //   console.log(`There was an error: ${error}`)
    //   showLoginError(error)
    // }
}

// Create new account using email/password
const createAccount = async () => {
    const email = txtEmail.value
    const password = txtPassword.value

    try {
        await createUserWithEmailAndPassword(auth, email, password)
    }
    catch (error) {
        console.log(`There was an error: ${error}`)
        showLoginError(error)
    }
}

// Monitor auth state
const monitorAuthState = async () => {
    onAuthStateChanged(auth, user => {
        if (user) {
            console.log(user)
            // showApp()
            showLoginState(user)

            hideLoginError()
            // hideLinkError()
        }
        // else {
        //     showLoginForm()
        //     lblAuthState.innerHTML = `You're not logged in.`
        // }
    })
}

// Log out
const logout = async () => {
    await signOut(auth);
}

btnLogin.addEventListener("click", loginEmailPassword)
btnSignup.addEventListener("click", createAccount)
btnLogout.addEventListener("click", logout)



monitorAuthState();