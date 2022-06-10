// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCgM7WgX0FDbv5h8n9q-l_pYZZpFF2lj6I",
    authDomain: "jkimtech.firebaseapp.com",
    projectId: "jkimtech",
    storageBucket: "jkimtech.appspot.com",
    messagingSenderId: "682045885586",
    appId: "1:682045885586:web:ffe883347317c1a1d4aa4b",
    measurementId: "G-6LTXMRDQM9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // reference messages collection
var messagesRef = firebase.database().ref('messages');





//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();
//get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var tel = getInputVal('tel');
    var message = getInputVal('message');
    saveMessage(name, email, tel, message);

    //alert
document.querySelector('.alert').style.display = 'block';

//hide alert
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);
    document.getElementById('contactForm').reset();
    
}



//fuction toget form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, tel, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        tel: tel,
        message: message
    })
}

const inputs = document.querySelectorAll(".input");
function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

