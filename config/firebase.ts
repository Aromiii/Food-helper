// Import the functions you need from the SDKs you need
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjlx36rihQ_vS1KpU2WeCjTArR1Y_rh_M",
  authDomain: "food-helper-a73b7.firebaseapp.com",
  projectId: "food-helper-a73b7",
  storageBucket: "food-helper-a73b7.appspot.com",
  messagingSenderId: "404309027827",
  appId: "1:404309027827:web:47b25e11243eb625ed8086",
  measurementId: "G-9FCCSBNYT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

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

