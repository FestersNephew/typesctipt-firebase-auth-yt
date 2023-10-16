import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence  } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
    apiKey: "AIzaSyAgnhI5jQgWtUfhFm48sKwgwfkghj-hMjg",
    authDomain: "pleasework-bd73f.firebaseapp.com",
    projectId: "pleasework-bd73f",
    storageBucket: "pleasework-bd73f.appspot.com",
    messagingSenderId: "23346412270",
    appId: "1:23346412270:web:586d18e9a52218e65611ff"
  };

const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
