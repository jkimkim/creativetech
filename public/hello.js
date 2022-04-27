// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth, onAuthStateChanged } from 'firebaseauth/database';
// import { getDatabase } from "firebase/database";
// import { GoogleAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCgM7WgX0FDbv5h8n9q-l_pYZZpFF2lj6I",
//     authDomain: "jkimtech.firebaseapp.com",
//     databaseURL: "https://jkimtech-default-rtdb.firebaseio.com",
//     projectId: "jkimtech",
//     storageBucket: "jkimtech.appspot.com",
//     messagingSenderId: "682045885586",
//     appId: "1:682045885586:web:ffe883347317c1a1d4aa4b",
//     measurementId: "G-6LTXMRDQM9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase(app);

// import { getAuth } from "firebase/auth";

// const auth = getAuth();
// auth.languageCode = 'it';
// // To apply the default browser preference instead of explicitly setting it.
// // firebase.auth().useDeviceLanguage();

// provider.setCustomParameters({
//     'login_hint': 'user@example.com'
// });

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const auth = getAuth();
// signInWithPopup(auth, provider)
//     .then((result) => {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;
//         // The signed-in user info.
//         const user = result.user;
//         // ...
//     }).catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//     });

// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//     // Sign-out successful.
// }).catch((error) => {
//     // An error happened.
// });

// onAuthStateChanged(auth, user => {
//     if (user != null){
//         console.log('logged in')
//     } else {
//         console.log('not logged in')
//     }
// })


const bro = (greeting) => {
    return `${greeting}, bro`
}
export {bro}