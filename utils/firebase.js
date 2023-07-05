import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5UnJYXYREAuFpQq4BiWJO_DJPRMiV7Z4",
    authDomain: "transportebd-24045.firebaseapp.com",
    projectId: "transportebd-24045",
    storageBucket: "transportebd-24045.appspot.com",
    messagingSenderId: "1068880196074",
    appId: "1:1068880196074:web:7fba6f3029f7403c1a0293"
  };
  
 export const firebaseApp = firebase.initializeApp(firebaseConfig);
