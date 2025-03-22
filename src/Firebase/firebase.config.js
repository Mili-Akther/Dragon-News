// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYXuEiNi2vKMfLr1KkAsGX4Mgyyg86emg",
  authDomain: "dragon-news-af2a1.firebaseapp.com",
  projectId: "dragon-news-af2a1",
  storageBucket: "dragon-news-af2a1.firebasestorage.app",
  messagingSenderId: "315263353392",
  appId: "1:315263353392:web:6b46687636cc7892a3e3f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;