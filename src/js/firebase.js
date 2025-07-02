// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7UGy_FH1wA4Cf4RW0y4VnMPcnVHQqMOs",
    authDomain: "chat-application-6b01b.firebaseapp.com",
    projectId: "chat-application-6b01b",
    storageBucket: "chat-application-6b01b.firebasestorage.app",
    messagingSenderId: "908850790893",
    appId: "1:908850790893:web:2fdf011a14cbc724bca7e4",
    measurementId: "G-M1DYGP6C8M"
};

// Initialize Firebase
const app       = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)


const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
    });
}