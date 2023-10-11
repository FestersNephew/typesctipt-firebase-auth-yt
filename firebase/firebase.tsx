import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAgnhI5jQgWtUfhFm48sKwgwfkghj-hMjg",
    authDomain: "pleasework-bd73f.firebaseapp.com",
    projectId: "pleasework-bd73f",
    storageBucket: "pleasework-bd73f.appspot.com",
    messagingSenderId: "23346412270",
    appId: "1:23346412270:web:586d18e9a52218e65611ff"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
