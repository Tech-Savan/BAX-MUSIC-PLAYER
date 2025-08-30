import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC7Rv7ityuKmOItXtCD7FsetQA6xwc1iOc",
  authDomain: "bax-music-player.firebaseapp.com",
  projectId: "bax-music-player",
  storageBucket: "bax-music-player.firebasestorage.app",
  messagingSenderId: "787191738525",
  appId: "1:787191738525:web:eeb8a3c5d741cbb6f06474",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export let _Auth = getAuth(app);
export let _DB = getFirestore(app);
