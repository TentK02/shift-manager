import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHJbdJFfqhU0LLbyrXWNDyTPGzStwhC9Y",
  authDomain: "shift-manager-39794.firebaseapp.com",
  projectId: "shift-manager-39794",
  storageBucket: "shift-manager-39794.firebasestorage.app",
  messagingSenderId: "811015186241",
  appId: "1:811015186241:web:6a48b70cd6db62357363c0",
  measurementId: "G-KZBSWS4K6Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

