// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import '../css/bootstrap.css';
import '../style1.css';
import '../assets/web/assets/mobirise-icons2/mobirise2.css';
import '../assets/web/assets/mobirise-icons-bold/mobirise-icons-bold.css';
import '../assets/web/assets/mobirise-icons/mobirise-icons.css';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/bootstrap/css/bootstrap-grid.min.css';
import '../assets/bootstrap/css/bootstrap-reboot.min.css';
import '../assets/animatecss/animate.css';
import '../assets/dropdown/css/style.css';
import '../assets/socicon/css/styles.css';
import '../assets/socicon/css/styles.css';
import '../assets/theme/css/style.css';
import '../assets/mobirise/css/mbr-additional.css';
import '../assets/mobirise/css/mbr-additional.css';
import '../assets/images/passport.png';
import '../style1.css';
import '../style1.css'; // TODO: Add SDKs for Firebase products that you want to use
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

var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
import { bro } from "../hello";
console.log(bro('dude'));