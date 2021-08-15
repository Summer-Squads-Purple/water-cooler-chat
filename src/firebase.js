import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBGMbo1sgr60c8hcubtgRQp6ppG5sGr4y4",
    authDomain: "water-cooler-chat.firebaseapp.com",
    projectId: "water-cooler-chat",
    storageBucket: "water-cooler-chat.appspot.com",
    messagingSenderId: "356588331834",
    appId: "1:356588331834:web:5da0a62dbe767d571fe603"
  }).auth();