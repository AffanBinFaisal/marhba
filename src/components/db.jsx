import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFcPVZg9nPZ3O3AehFH5ALb7oE59qQy48",
  authDomain: "marhba-c51ae.firebaseapp.com",
  projectId: "marhba-c51ae",
  storageBucket: "marhba-c51ae.appspot.com",
  messagingSenderId: "464994224657",
  appId: "1:464994224657:web:5a282846c847181715bfb0",
  measurementId: "G-S1R90XG22B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
