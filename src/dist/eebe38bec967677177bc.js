function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

import '../style2.css';
import '../assets/halfmoon-1.1.1/css/halfmoon.css';
import '../assets/fontawesome/css/all.css';
import regeneratorRuntime from "regenerator-runtime";
import { hideLoginError, showLoginState, showLoginError, btnLogin, btnSignup, btnLogout, txtEmail, showBtn, txtPassword } from './ui2.js';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator } from 'firebase/auth';
var firebaseApp = initializeApp({
  apiKey: "AIzaSyCgM7WgX0FDbv5h8n9q-l_pYZZpFF2lj6I",
  authDomain: "jkimtech.firebaseapp.com",
  databaseURL: "https://jkimtech-default-rtdb.firebaseio.com",
  projectId: "jkimtech",
  storageBucket: "jkimtech.appspot.com",
  messagingSenderId: "682045885586",
  appId: "1:682045885586:web:de5ce24c219008f6d4aa4b",
  measurementId: "G-FJ7EGGLBGJ"
});
var auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099"); // Login using email/password

var loginEmailPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var loginEmail, loginPassword;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loginEmail = txtEmail.value;
            loginPassword = txtPassword.value; // step 1: try doing this w/o error handling, and then add try/catch

            _context.next = 4;
            return signInWithEmailAndPassword(auth, loginEmail, loginPassword);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function loginEmailPassword() {
    return _ref.apply(this, arguments);
  };
}(); // Create new account using email/password


var createAccount = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var email, password;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = txtEmail.value;
            password = txtPassword.value;
            _context2.prev = 2;
            _context2.next = 5;
            return createUserWithEmailAndPassword(auth, email, password);

          case 5:
            _context2.next = 11;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](2);
            console.log("There was an error: ".concat(_context2.t0));
            showLoginError(_context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 7]]);
  }));

  return function createAccount() {
    return _ref2.apply(this, arguments);
  };
}(); // Monitor auth state


export var monitorAuthState = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onAuthStateChanged(auth, function (user) {
              if (user) {
                console.log(user); // showApp()

                showBtn();
                showLoginState(user);
                hideLoginError(); // hideLinkError()
              } // else {
              //     showLoginForm()
              //     lblAuthState.innerHTML = `You're not logged in.`
              // }

            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function monitorAuthState() {
    return _ref3.apply(this, arguments);
  };
}(); // Log out

var logout = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return signOut(auth);

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function logout() {
    return _ref4.apply(this, arguments);
  };
}();

btnLogin.addEventListener("click", loginEmailPassword);
btnSignup.addEventListener("click", createAccount);
btnLogout.addEventListener("click", logout);
monitorAuthState();