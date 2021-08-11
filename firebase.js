import firebase from '@react-native-firebase/app'
require('@react-native-firebase/firestore')


const firebaseConfig = {
    apiKey: "AIzaSyAdQ87KmV4l9KjyOVJpp22-gC9FaDjPiwo",
    authDomain: "sociallogin-c698e.firebaseapp.com",
    projectId: "sociallogin-c698e",
    storageBucket: "sociallogin-c698e.appspot.com",
    messagingSenderId: "1012028628373",
    appId: "1:1012028628373:web:308d955a64d327ee1e6a9c",
    measurementId: "G-GP6MKVWWTR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

  const db = firebase.firestore();

  export default db;