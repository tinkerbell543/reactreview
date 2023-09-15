import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBva5e35osnRWJnkR1x6Dnh3spk4w3-0Iw",
  authDomain: "reviewssok3.firebaseapp.com",
  projectId: "reviewssok3",
  storageBucket: "reviewssok3.appspot.com",
  messagingSenderId: "460903977044",
  appId: "1:460903977044:web:ae6ad4fe552adebf755dc1",
  measurementId: "G-T5NBZRMPVJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
