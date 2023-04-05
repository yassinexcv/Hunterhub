import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyACNH8gCLR_BYPM7_dY8kaoqp8PqO8qrCc",
  authDomain: "hunterhub-e93c4.firebaseapp.com",
  projectId: "hunterhub-e93c4",
  storageBucket: "hunterhub-e93c4.appspot.com",
  messagingSenderId: "787925883793",
  appId: "1:787925883793:web:0cc57322eeb1dd03201830",
  measurementId: "G-EE8E5SP235"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
export {firebase};