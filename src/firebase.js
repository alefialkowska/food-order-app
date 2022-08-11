// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE39b6rz49d4k6Tojfvk8tK6xSxa2nhi4",
  authDomain: "food-order-app-data-b6ee7.firebaseapp.com",
  databaseURL: "https://food-order-app-data-b6ee7-default-rtdb.firebaseio.com",
  projectId: "food-order-app-data-b6ee7",
  storageBucket: "food-order-app-data-b6ee7.appspot.com",
  messagingSenderId: "699107932791",
  appId: "1:699107932791:web:157f62c2e2f194e373e472",
  measurementId: "G-PHDF5TKRSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;