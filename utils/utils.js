import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

import {
    getFirestore,
    doc,
    setDoc,
    getDoc,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCwxVcJaC52-yUFDXwH-nLBw90bauS0K6I",
    authDomain: "e-commerce-web---shoplife.firebaseapp.com",
    projectId: "e-commerce-web---shoplife",
    storageBucket: "e-commerce-web---shoplife.appspot.com",
    messagingSenderId: "508774774692",
    appId: "1:508774774692:web:5afd2e8821c9caaa4b7331",
    measurementId: "G-KN8CXYW08M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);


export {
    app,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    storage,
    ref,
    uploadBytes,
    getDownloadURL,
    db,
    doc,
    setDoc,
    getDoc,
};