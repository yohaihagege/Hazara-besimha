// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAOubZehTRQ25F-EosjadLi-wD55vvauA",
    authDomain: "hazara-besimha.firebaseapp.com",
    projectId: "hazara-besimha",
    storageBucket: "hazara-besimha.firebasestorage.app",
    messagingSenderId: "651302599716",
    appId: "1:651302599716:web:e696350125ac377b616cb1",
    measurementId: "G-06M6B21GCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);