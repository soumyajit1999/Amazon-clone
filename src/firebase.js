import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvTIAeczgnNSFVvlbPETa3B7LvR55OtVo",
    authDomain: "clone-de509.firebaseapp.com",
    databaseURL: "https://clone-de509.firebaseio.com",
    projectId: "clone-de509",
    storageBucket: "clone-de509.appspot.com",
    messagingSenderId: "422297472701",
    appId: "1:422297472701:web:6e4622a2fab3a4eaba31d4",
    measurementId: "G-QT5DFWLCYZ",

});

const auth = firebase.auth();

export {auth};