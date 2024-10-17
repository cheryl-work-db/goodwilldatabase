import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXLP92xAd40wr97EICGvBZ-Mog-el-7mg",
  authDomain: "productiontrackerapp.firebaseapp.com",
  projectId: "productiontrackerapp",
  storageBucket: "productiontrackerapp.appspot.com",
  messagingSenderId: "51136360170",
  appId: "1:51136360170:web:15bc1a9606f6bfc4213193",
  measurementId: "G-5EG9R4SW97"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
