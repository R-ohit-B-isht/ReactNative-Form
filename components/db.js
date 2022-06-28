//import * as firebase from 'firebase';

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/database";
/*import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firestore from 'firebase/firestore';*/

 const config = {
   apiKey: "AIzaSyDwtotJaEZOBSHaRmzEfxVsK7GDs73Q5HU",
  authDomain: "react-form-f49bb.firebaseapp.com",
  projectId: "react-form-f49bb",
  storageBucket: "react-form-f49bb.appspot.com",
  messagingSenderId: "443482357021",
  appId: "1:443482357021:web:1ad6cb8e135ce6725a35f4",
  measurementId: "G-S18SPDR9T0"
  };

//const app =
firebase.initializeApp(config);


//const db = app.database();
const FireBase =firebase.initializeApp(config);
const db=firebase.firestore();
export default db;