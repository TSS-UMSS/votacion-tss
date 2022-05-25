import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { collection, getDocs, getFirestore } from "firebase/firestore";
//import { createContext } from "react";

// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEnAfoWOUOWb3AcsCvME-NcaKl6Z9x6hQ",
  authDomain: "elecciones-electorales-tss.firebaseapp.com",
  projectId: "elecciones-electorales-tss",
  storageBucket: "elecciones-electorales-tss.appspot.com",
  messagingSenderId: "1066944497467",
  appId: "1:1066944497467:web:770945188614d294f2991e",
  measurementId: "G-QMWSSEMPLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export default firestore;
export const getUrna = () => getDocs(collection(firestore,'UrnaVoto'))

//export const AuthContext = createContext(null);
//export const AuthProvider = {{children}} => {
//  return <AuthContext.Provider>{children}</AuthContext.Provider>
//};