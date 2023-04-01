import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBQI1lY9Gy2Yy8wVSPZLpR8_k38YdqPvnY",
    authDomain: "vue3firebase9-757b6.firebaseapp.com",
    projectId: "vue3firebase9-757b6",
    storageBucket: "vue3firebase9-757b6.appspot.com",
    messagingSenderId: "499825186980",
    appId: "1:499825186980:web:393fc37bc1a80c5d85ee31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const citiesColRef = collection(db, 'cities');

export default citiesColRef;