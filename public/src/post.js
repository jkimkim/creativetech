import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgM7WgX0FDbv5h8n9q-l_pYZZpFF2lj6I",
    authDomain: "jkimtech.firebaseapp.com",
    databaseURL: "https://jkimtech-default-rtdb.firebaseio.com",
    projectId: "jkimtech",
    storageBucket: "jkimtech.appspot.com",
    messagingSenderId: "682045885586",
    appId: "1:682045885586:web:de5ce24c219008f6d4aa4b",
    measurementId: "G-FJ7EGGLBGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);