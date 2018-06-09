import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyDhZ65a1KOOk1eyDH2pFn08dWKoK9wKzI4",
    authDomain: "portfolio-26b58.firebaseapp.com",
    databaseURL: "https://portfolio-26b58.firebaseio.com",
    projectId: "portfolio-26b58",
    storageBucket: "portfolio-26b58.appspot.com",
    messagingSenderId: "319335740648"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    auth,
    db
};