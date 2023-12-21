import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPoxlKgJK1gjYR11Dzu8yv3st3dD5dxQw",
  authDomain: "artelec-react.firebaseapp.com",
  projectId: "artelec-react",
  storageBucket: "artelec-react.appspot.com",
  messagingSenderId: "1097506196416",
  appId: "1:1097506196416:web:9f656b3000feea1a695625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);