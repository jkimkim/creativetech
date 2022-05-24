
//sign in/ sign up ui

export const txtEmail = document.querySelector("#email");
export const txtPassword = document.querySelector("#password");

export const btnLogin = document.querySelector(".login");
export const btnSignup = document.querySelector(".signup");

export const btnLogout = document.querySelector(".logout");

export const divAuthState = document.querySelector('#divAuthState')
export const lblAuthState = document.querySelector('#lblAuthState')

export const divLoginError = document.querySelector('#divLoginError')
export const lblLoginErrorMessage = document.querySelector('#lblLoginErrorMessage')

export const hideLoginError = () => {
    divLoginError.style.display = 'none'
    lblLoginErrorMessage.innerHTML = ''
}

export const showLoginError = (error) => {
    divLoginError.style.display = 'block'
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
        lblLoginErrorMessage.innerHTML = `Wrong password. Try again.`
    }
    else {
        lblLoginErrorMessage.innerHTML = `Error: ${error.message}`
    }
}

export const showLoginState = (user) => {
    lblAuthState.innerHTML = `You're logged in as ${user.displayName} (uid: ${user.uid}, email: ${user.email}) `
}

hideLoginError()