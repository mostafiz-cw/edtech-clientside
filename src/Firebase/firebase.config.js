// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkVUdEpDhO506uzDRM_i1JaCk8f1j7ptk",
  authDomain: "assignment-10-learing-webapp.firebaseapp.com",
  projectId: "assignment-10-learing-webapp",
  storageBucket: "assignment-10-learing-webapp.appspot.com",
  messagingSenderId: "310083479701",
  appId: "1:310083479701:web:93a4d85e49b0ac01a1939c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;