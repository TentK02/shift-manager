import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ★この {} の中身を、次の手順であなたの firebaseConfig に置き換えます
const firebaseConfig = {
  apiKey: "AIzaSyCfdpNiBmRElA9Q91O9b8OB3802IWCd0g8",
  authDomain: "shift-manager-a3d85.firebaseapp.com",
  projectId: "shift-manager-a3d85",
  storageBucket: "shift-manager-a3d85.firebasestorage.app",
  messagingSenderId: "802190824051",
  appId: "1:802190824051:web:28deaa0de6ffac8f93d006",
  measurementId: "G-BV2MMMFYLS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
