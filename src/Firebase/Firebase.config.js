// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQEkuonq4AeDpugtqLiGlymnIWGmqetU",
  authDomain: "speedy-toys.firebaseapp.com",
  projectId: "speedy-toys",
  storageBucket: "speedy-toys.appspot.com",
  messagingSenderId: "447025108911",
  appId: "1:447025108911:web:e38ee609a2c806fb98415a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
