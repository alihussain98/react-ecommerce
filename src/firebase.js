// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCceErQR_sIqcI-G4BmaDgCiOomXKijSBA",
    authDomain: "silpymeals.firebaseapp.com",
    projectId: "silpymeals",
    storageBucket: "silpymeals.appspot.com",
    messagingSenderId: "1057936710989",
    appId: "1:1057936710989:web:962f69f4841b8eaa5aab04",
    measurementId: "G-BSWR2HTKYQ"
  };

 const firebaseApp = firebase.initializeApp(firebaseConfig);
// databse for the email/passwords
 const db = firebaseApp.firestore();
 //variable to handle all the signing in.
 const auth = firebase.auth();

 export { db, auth};