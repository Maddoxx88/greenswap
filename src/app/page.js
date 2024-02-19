import Image from "next/image";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3DYDNNiiwKkY-167L3pU6oFzY9sOLtnE",
  authDomain: "greenswap-njit.firebaseapp.com",
  projectId: "greenswap-njit",
  storageBucket: "greenswap-njit.appspot.com",
  messagingSenderId: "551738241504",
  appId: "1:551738241504:web:29b9399331682d02cb7b85",
  measurementId: "G-M6R5H4WFSB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getData(db) {
  const data = collection(db, 'data');
  const dataSnapshot = await getDocs(data);
  const dataList = dataSnapshot.docs.map(doc => doc.data());
  return dataList[0];
}

export default function Home() {
  const v = getData(db);
  return (
    <main>
      <div>
        <h2>{v['field']}</h2>
      </div>
    </main>
  );
}
