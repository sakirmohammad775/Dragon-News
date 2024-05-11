// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8snsqWLxRgrnGhwzY-NvWY1o4iw34370",
  authDomain: "react-dragon-news-auth-39426.firebaseapp.com",
  projectId: "react-dragon-news-auth-39426",
  storageBucket: "react-dragon-news-auth-39426.appspot.com",
  messagingSenderId: "752622636210",
  appId: "1:752622636210:web:5238666216fce84a1ecdab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app