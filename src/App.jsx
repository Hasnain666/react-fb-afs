import { useState } from "react";
import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
firebase.initializeApp({
  apiKey: "AIzaSyDkJsr7Ht_1wKmAJnhOD_0Yv4Sp1kQJpr0",
  authDomain: "attender-feedback.firebaseapp.com",
  projectId: "attender-feedback",
  storageBucket: "attender-feedback.appspot.com",
  messagingSenderId: "636301819406",
  appId: "1:636301819406:web:c9b6d34fa2088cbf56065f",
  measurementId: "G-7MQRYCFBV5",
});
const auth = firebase.auth();
const firestore = firebase.firestore();
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
