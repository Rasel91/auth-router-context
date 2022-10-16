// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD072DtSsJ72WmvNpAw6ppEXK9-TJAbzm0",
  authDomain: "auth-router-context-bb451.firebaseapp.com",
  projectId: "auth-router-context-bb451",
  storageBucket: "auth-router-context-bb451.appspot.com",
  messagingSenderId: "549511394856",
  appId: "1:549511394856:web:7f0bb9775aeb7531bde71d",
  measurementId: "G-06KVNGM3K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;