/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
import { initializeApp } from "firebase/app";
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyD4fzkEnLsEqkzo6iVdIBCLGKJN0fM9TXM",
  authDomain: "chatty-be78e.firebaseapp.com",
  databaseURL: "https://chatty-be78e.firebaseio.com",
  projectId: "chatty-be78e",
  storageBucket: "chatty-be78e.appspot.com",
  messagingSenderId: "495554800353",
  appId: "1:495554800353:web:860d05a6de94d50e66a5a0"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}

const app = initializeApp(config);