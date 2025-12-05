import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // PENTING: Import Firestore

// Konfigurasi Firebase Anda
const firebaseConfig = {
  apiKey: "AIzaSyCg3stGDsFRV61kOXmFGZerguZZWTrkIsU",
  authDomain: "barbershopapp-7addc.firebaseapp.com",
  projectId: "barbershopapp-7addc",
  storageBucket: "barbershopapp-7addc.firebasestorage.app",
  messagingSenderId: "221672566582",
  appId: "1:221672566582:web:eb7b4c8d2f66104ce2cd97",
  measurementId: "G-ECT110SMBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore (Database)
const db = getFirestore(app);

// Export db agar bisa dipakai di file lain (seperti App.js)
export { db, analytics };