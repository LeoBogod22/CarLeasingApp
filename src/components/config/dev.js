
import * as firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAQQn07buTAwldacMSsvgFV3M5ql-eDAJU",
    authDomain: "car-urdjym.firebaseapp.com",
    databaseURL: "https://car-urdjym.firebaseio.com",
    projectId: "car-urdjym",
    storageBucket: "car-urdjym.appspot.com",
    messagingSenderId: "145902025889"
};



var app = firebase.initializeApp(firebaseConfig, "auth");
export default app;