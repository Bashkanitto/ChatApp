import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTZseVT9q741AD3_kVnEUKmukK-ihmM4s",
  authDomain: "newchat-25af2.firebaseapp.com",
  projectId: "newchat-25af2",
  storageBucket: "newchat-25af2.appspot.com",
  messagingSenderId: "498625513897",
  appId: "1:498625513897:web:41873bc7ecc85068e21cb8"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
