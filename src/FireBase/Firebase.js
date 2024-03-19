import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDrPbNU3yXrIWTkGhWXYolvq5IEtU4XQ1o",
    authDomain: "fir-yt-51dbc.firebaseapp.com",
    projectId: "fir-yt-51dbc",
    storageBucket: "fir-yt-51dbc.appspot.com",
    messagingSenderId: "51252549076",
    appId: "1:51252549076:web:e01b91b25c72960fd83241"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const database =getFirestore(app)