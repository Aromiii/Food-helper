// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQlWrPV7vL1gPY3cjLIIt-1UUJaANGrEM",
  authDomain: "food-helper-63fd0.firebaseapp.com",
  projectId: "food-helper-63fd0",
  storageBucket: "food-helper-63fd0.appspot.com",
  messagingSenderId: "833087637499",
  appId: "1:833087637499:web:b588bc7700c47a35266d5e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// Initialize Firestore
export const db = getFirestore()

//Initialize provider
const provider = new GoogleAuthProvider()

//TODO refactor profile pic logic
//Sign in logic for Google oauth
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result ) => {
    if (result.user.photoURL != null){
      localStorage.setItem("profilePic", result.user.photoURL)
    }
  }).catch((error) => {
    console.log(error)
  })
}

