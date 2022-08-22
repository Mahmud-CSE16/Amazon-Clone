import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhIL8gsVMmFYv0pVNanCElj7Lw6WRYbGA",
    authDomain: "mahmud-ecommerce-reactjs.firebaseapp.com",
    projectId: "mahmud-ecommerce-reactjs",
    storageBucket: "mahmud-ecommerce-reactjs.appspot.com",
    messagingSenderId: "796822609965",
    appId: "1:796822609965:web:670471efb6dcfc60ac18a4",
    measurementId: "G-ES3318YGND"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};