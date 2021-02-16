import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlMatmlIPK6LQ6Z38QPLu5u9cCrWgar6E",
  authDomain: "where-in-the-verse.firebaseapp.com",
  projectId: "where-in-the-verse",
  storageBucket: "where-in-the-verse.appspot.com",
  messagingSenderId: "75086975542",
  appId: "1:75086975542:web:441f5061cc9dc23b8d3e97",
  measurementId: "G-27HQ8ENNF9",
};

// Init Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
