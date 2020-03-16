import * as firebase from "firebase";

 var config = {
    apiKey: "AIzaSyAQQn07buTAwldacMSsvgFV3M5ql-eDAJU",
    authDomain: "car-urdjym.firebaseapp.com",
    databaseURL: "https://car-urdjym.firebaseio.com",
    projectId: "car-urdjym",
    storageBucket: "car-urdjym.appspot.com",
    messagingSenderId: "145902025889"
  };
  firebase.initializeApp(config);


const databaseRef = firebase.database().ref();
export const CarsRef = databaseRef.child("Cars");

export const CarssRef = databaseRef.child("Cars2");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const timeRef = firebase.database.ServerValue.TIMESTAMP;