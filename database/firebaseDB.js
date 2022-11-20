import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAXNr3qAri4xTLMUHu0-A7h0CfGH9f1gic",
    authDomain: "pill-reminder-e5475.firebaseapp.com",
    projectId: "pill-reminder-e5475",
    storageBucket: "pill-reminder-e5475.appspot.com",
    messagingSenderId: "10735431858",
    appId: "1:10735431858:web:fae427d98d1d19352d19ab",
    measurementId: "G-DN5LD3MR5C"
  };
  
  // Initialize Firebase
  const initialApp = initializeApp(firebaseConfig);
  const db = getFirestore(initialApp);

  export default db;