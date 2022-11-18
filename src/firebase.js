import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ? this will be hidden in an envirnoment variable

// ? web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARV2VOcSMV85UF-lD51Q6OrYztIC0D4bM",
  authDomain: "avatrade-7d80f.firebaseapp.com",
  projectId: "avatrade-7d80f",
  storageBucket: "avatrade-7d80f.appspot.com",
  messagingSenderId: "477749386748",
  appId: "1:477749386748:web:260c8fc142a35aeafce679",
};

// ? Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
