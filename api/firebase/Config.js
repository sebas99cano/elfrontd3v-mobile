import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4BzHzJxt6a0RprFRyNhSMCouFITKsYuI",
  authDomain: "elfrontd3v.firebaseapp.com",
  projectId: "elfrontd3v",
  storageBucket: "elfrontd3v.appspot.com",
  messagingSenderId: "941100039124",
  appId: "1:941100039124:web:306f97b9aaaafa69cf3441",
  measurementId: "G-CPG9HS60SZ",
};

export const AuthConfig = {
  webClientId:
    "941100039124-5l0uci195169bk51jppalkbn7gb6lf1h.apps.googleusercontent.com",
  iosClientId:
    "941100039124-26ca5q4c7vtmfi807b0vtiunlqr8h4ht.apps.googleusercontent.com",
  androidClientId:
    "941100039124-avl8uopk32nirov1kef0mmc022kit4d4.apps.googleusercontent.com",
  scopes: ["profile", "email"],
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);

export default app;
