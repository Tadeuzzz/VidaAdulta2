import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDRPHQX-wmLt5QP7vUZvdiDZXrHJaV7nNs",
  authDomain: "vida-adulta-2.firebaseapp.com",
  projectId: "vida-adulta-2",
  storageBucket: "vida-adulta-2.firebasestorage.app",
  messagingSenderId: "167365316266",
  appId: "1:167365316266:web:014b63c7e84fe8b50dcad3",
  measurementId: "G-FV1Z9L4R6C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

export { auth, storage, db };