import React from 'react';
import ReactDOM from 'react-dom';


// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';

import {
    getFirestore,
    collection,
    getDocs
} from "firebase/firestore";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style1.css'
import './assets/fontawesome/css/all.css'
import './login.css'
import './carousel.css'
import './splash.css';

import Header from './components/header.jsx'
import Splash from './components/splash.jsx'
import Carousel from './components/carousel.jsx'
import Login from './components/login.jsx'
// import App from './splash.jsx';



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
 initializeApp(firebaseConfig);


// if (user) {
//     showBtn(user)
// }

//header
ReactDOM.render(
    <React.StrictMode>
        <Header/>
    </React.StrictMode>,
    document.getElementById('header-1')
);

//splash screen
ReactDOM.render(
     <React.StrictMode>
         <Splash/>
     </React.StrictMode>,
     document.getElementById('splash')
 );

 //carousel
 ReactDOM.render(
    <React.StrictMode>
        <Carousel/>
    </React.StrictMode>,
    document.getElementById('carousel')
);

const db = getFirestore()

//collection reference
const colRef = collection(db, 'blogs')

//get docs
getDocs(colRef)
    .then((snapshot) => {
        let blogs = []
        snapshot.docs.forEach((doc) => {
            blogs.push({ ...doc.data(), id: doc.id})
        })
        console.log(blogs)
    })
    .catch(err => {
        console.log(err.message);
    })
    