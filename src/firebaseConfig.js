// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARVphibAJfM3d9h2226JYumBkHzBb4ztc",
  authDomain: "marvel-gym.firebaseapp.com",
  projectId: "marvel-gym",
  storageBucket: "marvel-gym.appspot.com",
  messagingSenderId: "654278916446",
  appId: "1:654278916446:web:4a25b770ec50ea62c6f7cf",
  measurementId: "G-W7M14CYGNQ"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app); 