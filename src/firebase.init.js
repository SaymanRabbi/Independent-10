// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBstTQpMctMsvDlEE1TlfdQKqrvsn7U6V8",
  authDomain: "assignment-ten-b5c83.firebaseapp.com",
  projectId: "assignment-ten-b5c83",
  storageBucket: "assignment-ten-b5c83.appspot.com",
  messagingSenderId: "261983951337",
  appId: "1:261983951337:web:322b665c6e41cb79f45378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;