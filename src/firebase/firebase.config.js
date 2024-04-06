// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBae5Pgo2C6hIK-iSzlNEPn5A3Xk6b9RzY",
  authDomain: "react-dragon-news-auth-a5796.firebaseapp.com",
  projectId: "react-dragon-news-auth-a5796",
  storageBucket: "react-dragon-news-auth-a5796.appspot.com",
  messagingSenderId: "625523045002",
  appId: "1:625523045002:web:67bf05c51cbefbe754b373"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;