import * as firebase from "firebase";

 var config = {
    apiKey: "AIzaSyC6C-8A-vfsEzv31acwjhru8N64g0Hzhcc",
    authDomain: "car-app-506db.firebaseapp.com",
    databaseURL: "https://car-app-506db.firebaseio.com",
    projectId: "car-app-506db",
    storageBucket: "car-app-506db.appspot.com",
    messagingSenderId: "496521253390"
  };
  firebase.initializeApp(config);


const databaseRef = firebase.database().ref();
export const CarsRef = databaseRef.child("Cars");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();

export const timeRef = firebase.database.ServerValue.TIMESTAMP;

export default databaseRef;