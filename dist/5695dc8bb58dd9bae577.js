function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ReactDOM from 'react-dom'; // Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './style1.css';
import './assets/fontawesome/css/all.css';
import './login.css';
import './carousel.css';
import './splash.css';
import Header from './components/header.jsx';
import Splash from './components/splash.jsx';
import Carousel from './components/carousel.jsx';
import Login from './components/login.jsx'; // import App from './splash.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

var firebaseConfig = {
  apiKey: "AIzaSyCgM7WgX0FDbv5h8n9q-l_pYZZpFF2lj6I",
  authDomain: "jkimtech.firebaseapp.com",
  databaseURL: "https://jkimtech-default-rtdb.firebaseio.com",
  projectId: "jkimtech",
  storageBucket: "jkimtech.appspot.com",
  messagingSenderId: "682045885586",
  appId: "1:682045885586:web:de5ce24c219008f6d4aa4b",
  measurementId: "G-FJ7EGGLBGJ"
}; // Initialize Firebase

initializeApp(firebaseConfig); // if (user) {
//     showBtn(user)
// }
//header

var root = ReactDOM.createRoot(document.getElementById('header-1'));
root.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Header, null))); //splash

var root2 = ReactDOM.createRoot(document.getElementById('splash'));
root2.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Splash, null))); //carousel

var root3 = ReactDOM.createRoot(document.getElementById('carousel'));
root3.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Carousel, null))); //login

var root4 = ReactDOM.createRoot(document.getElementById('login'));
root4.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Login, null))); //footer

var root5 = ReactDOM.createRoot(document.getElementById('footer-1'));
root5.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(Footer, null))); // import { getAuth, onAuthStateChanged } from "firebase/auth";
// ReactDOM.render(
//     <React.StrictMode>
//         <Header/>
//     </React.StrictMode>,
//     document.getElementById('header-1')
// );
// //splash screen
// ReactDOM.render(
//      <React.StrictMode>
//          <Splash/>
//      </React.StrictMode>,
//      document.getElementById('splash')
//  );
//  //carousel
//  ReactDOM.render(
//     <React.StrictMode>
//         <Carousel/>
//     </React.StrictMode>,
//     document.getElementById('carousel')
// );
// //login modal
// ReactDOM.render(
//     <React.StrictMode>
//         <Login/>
//     </React.StrictMode>,
//     document.getElementById('login')
// );

var db = getFirestore(); //collection reference

var colRef = collection(db, 'blogs'); //get docs

getDocs(colRef).then(function (snapshot) {
  var blogs = [];
  snapshot.docs.forEach(function (doc) {
    blogs.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
      id: doc.id
    }));
  });
  console.log(blogs);
})["catch"](function (err) {
  console.log(err.message);
});