// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4ljMxJwPhJ-stDDFfkEAWGFAxjOk9WHo",
    authDomain: "login-page-b1fa1.firebaseapp.com",
    projectId: "login-page-b1fa1",
    storageBucket: "login-page-b1fa1.appspot.com",
    messagingSenderId: "610598805096",
    appId: "1:610598805096:web:f434e8319b6d599c4525dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Firebase Auth

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// Sign up
document.querySelector('.sign-up-container form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = e.target[0].value; // Assuming name is the first input
    const email = e.target[1].value; // Assuming email is the second input
    const password = e.target[2].value; // Assuming password is the third input

    createUserWithEmailAndPassword(auth, email, password) // Use auth instance
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('User created successfully!');
            console.log(user);
            // Redirect to the dashboard page
            window.location.href = 'dashboard.html'; // Change this to your target page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Sign in
document.querySelector('.sign-in-container form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target[0].value; // Assuming email is the first input
    const password = e.target[1].value; // Assuming password is the second input

    signInWithEmailAndPassword(auth, email, password) // Use auth instance
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('User signed in successfully!');
            console.log(user);

            // Redirect to the dashboard page
            window.location.href = 'dashboard.html'; // Change this to your target page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Google sign-in
const googleSignInButton = document.createElement('button');
googleSignInButton.textContent = 'Sign in with Google';
googleSignInButton.classList.add('social'); // Optional: add class for styling
document.querySelector('.sign-in-container .social-container').appendChild(googleSignInButton);

// Google sign-in event listener
googleSignInButton.addEventListener('click', () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider) // Use auth instance
        .then((result) => {
            // This gives you a Google Access Token
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info
            const user = result.user;
            alert('User signed in with Google successfully!');
            console.log(user);

            // Redirect to the dashboard page
            window.location.href = 'dashboard.html'; // Change this to your target page
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Add event listeners for the sign-up and sign-in buttons
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});


// Sign in
document.querySelector('.sign-in-container form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = e.target[0].value; // Assuming email is the first input
    const password = e.target[1].value; // Assuming password is the second input

    console.log('Attempting to sign in with:', { email, password });

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert('User signed in successfully!');
            console.log(user);
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
