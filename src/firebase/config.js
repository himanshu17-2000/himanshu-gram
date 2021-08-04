 // Your web app's Firebase configuration
 import  firebase from 'firebase/app'
 import  'firebase/storage';
 import 'firebase/firestore'
 var firebaseConfig = {
    apiKey: "AIzaSyAWofiQngreOqXEY9aGX3u25rGvrr_KEhI",
    authDomain: "himanshu-gram.firebaseapp.com",
    projectId: "himanshu-gram",
    storageBucket: "himanshu-gram.appspot.com",
    messagingSenderId: "101280149030",
    appId: "1:101280149030:web:1726534c13a1cb3a5dc0e7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage() ;
  const projectFirestore = firebase.firestore() ;
  const timestamp = firebase.firestore.FieldValue.serverTimestamp ;


   
  export { projectStorage , projectFirestore ,timestamp} ;
