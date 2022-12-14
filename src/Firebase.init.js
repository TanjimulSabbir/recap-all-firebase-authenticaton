// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVihopMyJ5O_TrB8seX0NucCJO9nIfXz4",
    authDomain: "recap-all-firebase-auth.firebaseapp.com",
    projectId: "recap-all-firebase-auth",
    storageBucket: "recap-all-firebase-auth.appspot.com",
    messagingSenderId: "885495857246",
    appId: "1:885495857246:web:28a2840e0e02f141a434cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;