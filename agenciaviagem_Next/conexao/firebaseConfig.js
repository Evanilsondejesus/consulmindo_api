// lib/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBm02OzGxD_NkLRe7LDitezeYOnqR-9g7I",
  authDomain: "plataforma-evangelica.firebaseapp.com",
  databaseURL: "https://plataforma-evangelica-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "plataforma-evangelica",
  storageBucket: "plataforma-evangelica.appspot.com",
  messagingSenderId: "516992557622",
  appId: "1:516992557622:web:0a8c314edc91c9265eee97",
  measurementId: "G-3DJ6T16GZE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword };



