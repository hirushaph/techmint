// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREMESSAGE_ID,
  authDomain: 'techmint-be0df.firebaseapp.com',
  projectId: 'techmint-be0df',
  storageBucket: 'techmint-be0df.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREAPP_ID,
  appId: import.meta.env.VITE_FIREAPI_KEY,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
