import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyC3DYDNNiiwKkY-167L3pU6oFzY9sOLtnE",
  authDomain: "greenswap-njit.firebaseapp.com",
  projectId: "greenswap-njit",
  storageBucket: "greenswap-njit.appspot.com",
  messagingSenderId: "551738241504",
  appId: "1:551738241504:web:29b9399331682d02cb7b85",
  measurementId: "G-M6R5H4WFSB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function gsGetData(field) {
    const docRef = doc(db, "data", "fields");
    const docSnap = await getDoc(docRef);
    const fieldValue = docSnap.data()[field];
    return fieldValue;
}

export default gsGetData;