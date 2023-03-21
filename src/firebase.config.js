import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBpzyJqf5Y9V_tkJfp4eW53fv2Hwtb-IbY",
  authDomain: "reduxecommerce-cd638.firebaseapp.com",
  projectId: "reduxecommerce-cd638",
  storageBucket: "reduxecommerce-cd638.appspot.com",
  messagingSenderId: "491682055070",
  appId: "1:491682055070:web:90763880bebae6a3f40c8f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app