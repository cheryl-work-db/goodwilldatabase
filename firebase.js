// firebase.js

// Importa las funciones necesarias desde el SDK de Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase de tu proyecto
const firebaseConfig = {
  apiKey: "AIzaSyDXLP92xAd40wr97EICGvBZ-Mog-el-7mg",
  authDomain: "productiontrackerapp.firebaseapp.com",
  projectId: "productiontrackerapp",
  storageBucket: "productiontrackerapp.appspot.com",
  messagingSenderId: "51136360170",
  appId: "1:51136360170:web:15bc1a9606f6bfc4213193",
  measurementId: "G-5EG9R4SW97"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

// Exporta la base de datos para usarla en otros archivos
export { db };
