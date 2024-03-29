import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB1YSslfMblclf1lifobrNor0tKq5QibLk",
    authDomain: "mealstogo-8c084.firebaseapp.com",
    projectId: "mealstogo-8c084",
    storageBucket: "mealstogo-8c084.appspot.com",
    messagingSenderId: "704627276569",
    appId: "1:704627276569:web:b7a3975973618d26012388"
};

const app = initializeApp(firebaseConfig);