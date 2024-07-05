// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8iWbQ9qVBXUJT1bkrVYE-b49wQeW259M",
  authDomain: "info-6132-52c0c.firebaseapp.com",
  projectId: "info-6132-52c0c",
  storageBucket: "info-6132-52c0c.appspot.com",
  messagingSenderId: "190108972990",
  appId: "1:190108972990:web:df8c4e25c23e4139fbabef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}