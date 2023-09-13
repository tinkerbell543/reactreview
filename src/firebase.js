import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1kCIWTW8d4C63XF99R39ta1WNJ8VmwIQ",
  authDomain: "reviewssok2.firebaseapp.com",
  projectId: "reviewssok2",
  storageBucket: "reviewssok2.appspot.com",
  messagingSenderId: "82001741269",
  appId: "1:82001741269:web:798e195222a7cddbb9a95c",
  measurementId: "G-2V4B1F34BQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
