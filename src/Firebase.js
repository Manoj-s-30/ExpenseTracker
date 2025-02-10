// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKYqisc8Db84tyoPMcIDw82L9C2XY_R4E",
  authDomain: "for-mini.firebaseapp.com",
  projectId: "for-mini",
  storageBucket: "for-mini.firebasestorage.app",
  messagingSenderId: "698969654026",
  appId: "1:698969654026:web:423fcb124ada69c7d6b0f3",
  measurementId: "G-KW1573721P",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
