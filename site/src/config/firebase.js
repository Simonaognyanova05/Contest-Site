import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';;

const firebaseConfig = {
    apiKey: "AIzaSyB_u1ue_2gFoLJyPMs6nx4lIoToMSXlmKA",
    authDomain: "contest-site-36329.firebaseapp.com",
    projectId: "contest-site-36329",
    storageBucket: "contest-site-36329.firebasestorage.app",
    messagingSenderId: "466839858474",
    appId: "1:466839858474:web:d2ad9ccdda4e918a30c253"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);