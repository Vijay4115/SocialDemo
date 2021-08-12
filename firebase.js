import firebase from '@react-native-firebase/app'
require('@react-native-firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSxxxxxxxxxl9KjyOVJpp22-gC9FaDjPiwo",
    authDomain: "sociaxxxxx98e.firebaseapp.com",
    projectId: "socixxxxxin-c698e",
    storageBucket: "socialxxxxxxe.appspot.com",
    messagingSenderId: "1012xxxxx8373",
    appId: "1:10120xxxxxxweb:308d955a64d327ee1e6a9c",
    measurementId: "G-GxxxxxxxVWWTR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  export default db;
