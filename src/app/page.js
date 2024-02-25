"use client";

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore/lite";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyC3DYDNNiiwKkY-167L3pU6oFzY9sOLtnE",
  authDomain: "greenswap-njit.firebaseapp.com",
  projectId: "greenswap-njit",
  storageBucket: "greenswap-njit.appspot.com",
  messagingSenderId: "551738241504",
  appId: "1:551738241504:web:29b9399331682d02cb7b85",
  measurementId: "G-M6R5H4WFSB",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const [itemData, setItemData] = useState([
  {
    "eco": "toothBrush",
    "ecoFootPrint": "9",
    "regFootPrint": 10,
    "name": "toothBrush",
    "regURL": "https://www.amazon.com/Colgate-Toothbrushes-Premier-Extra-Clean/dp/B00I7HPNHS/ref=sr_1_6?crid=2EOQC9W6MBJLF&keywords=toothbrush+10&qid=1707944364&sprefix=toothbrush+1%2Caps%2C501&sr=8-6",
    "ecoURL": "https://www.amazon.com/Toothbrushes-Eco-Friendly-Toothbrush-Biodegradable-Compostable/dp/B089B574B4/ref=sr_1_7?crid=9YZ9F1GL5DCX&keywords=tooth+brush+25+eco+friendly+pack&qid=1707944320&sprefix=tooth+brush+25+eco+friendly+pac%2Caps%2C214&sr=8-7"
  },
  {
    "eco": "toilet paper",
    "reg": "toilet paper",
    "regFootprint": 123,
    "ecoFootprint": 200,
    "regURL": "https://www.amazon.com/Amazon-Basics-2-Ply-Toilet-Paper/dp/B095CN96JS/ref=sr_1_1_ffob_sspa?crid=3JG0JY8T1GHWN&keywords=toilet+paper&qid=1707943217&sprefix=toliet+pape%2Caps%2C274&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    "ecoURL": "https://www.amazon.com/Panda-Premium-Strong-Toilet-Sheets/dp/B088P7CVV4/ref=sr_1_2_sspa?hvadid=174230991822&hvdev=c&hvlocphy=9003619&hvnetw=g&hvqmt=e&hvrand=1343281450292840034&hvtargid=kwd-1439219746&hydadcr=24628_9648893&keywords=biodegradable+toilet+paper&qid=1707943514&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  },
  {
    "eco": "garbageBag",
    "ecoFootPrint": "4",
    "regFootPrint": "5",
    "name": "garbageBag",
    "regURL": "https://www.amazon.com/Plastic-Spoons-Premium-Disposable-Durable/dp/B0B4DGLGR5/ref=sr_1_5?crid=3HT89UVSM30H6&keywords=spoons%2B140%2Bpack%2Bplastic&qid=1707943986&sprefix=spoons%2B140%2Bpack%2Bplasti%2Caps%2C281&sr=8-5&th=1",
    "ecoURL": "https://www.amazon.com/Compostable-Certified-Standards-Eco-Friendly-Convenient/dp/B09323839M/ref=sr_1_1_sspa?crid=1BSM4YAC7WS3S&keywords=eco+friendly+garbage+bags+13+gallon&qid=1707943815&sprefix=eco+friendly+garbage+bags+13+gallon%27%2Caps%2C272&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1"
  },
  {
    "eco": "deodorant",
    "ecoFootPrint": "11",
    "name": "deodorant",
    "regURL": "https://www.amazon.com/Degree-Men-Protection-Antiperspirant-Deodorant/dp/B00TPRG5D0/ref=sr_1_2_sspa?keywords=Deodorant&qid=1707944591&rdc=1&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    "ecoURL": "https://www.amazon.com/Deodorant-Soothing-Refreshing-Odor-Stick/dp/B09MN8TGMP/ref=sr_1_6?crid=1Q856DNSVVGFH&keywords=eco+friendly+Deodorant&qid=1707944635&rdc=1&sprefix=eco+friendly+%2Caps%2C222&sr=8-6",
    "regFootPrint": 11
  },
  {
    "name": "spoons",
    "ecoURL": "https://www.amazon.com/Count-Disposable-Wooden-Spoons-Biodegradable/dp/B0CFHRMPTM/ref=sr_1_6?crid=E16STOCY8P3T&keywords=eco+friendly+spoons+100&qid=1707944219&sprefix=eco+freidnly+spoons+100%2Caps%2C227&sr=8-6",
    "eco": "spoons",
    "ecoFootPrint": "8",
    "regFootPrint": "7",
    "regURL": "https://www.amazon.com/Plastic-Spoons-Premium-Disposable-Durable/dp/B0B4DGLGR5/ref=sr_1_5?crid=3HT89UVSM30H6&keywords=spoons%2B140%2Bpack%2Bplastic&qid=1707943986&sprefix=spoons%2B140%2Bpack%2Bplasti%2Caps%2C281&sr=8-5&th=1"
  }
]);
  const [searchVal, setVal] = useState(null);

  const handleInputChange = (e) => {
    setVal(e.target.value);
    console.log(searchVal);
  };

  const getItems = async () => {
    try {
      const q = await collection(db, "items");
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setItemData((itemData) => [...itemData, doc.data()]);
        console.log(doc.id, " => ", doc.data());
      });
      // setItemData(entriesData);
      // console.log(entriesData)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <main>
      <div className="mt-6 sm:mt-10 flex justify-center space-x-2 text-sm">
        <label
          for="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-96 p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-lg"
            placeholder="Find an item"
            required
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={getItems}
          >
            Search
          </button>
        </div>
      </div>
      
      <div>
        {itemData.length > 0 ? (
        <ul>
          {itemData.map((item, index) => (
            <div className="my-8 px-4 select-none" key={index}>
    <div className="flex relative">
      <div className="w-full border-1 border-secondary-100 bg-secondary-200 group hover:shadow-primary hover:border-primary rounded-lg transition ease-linear duration-200 cursor-pointer">
        <div className="text-3xl text-primary p-4 font-medium font-main text-center bg-secondary-100 rounded-t-lg group-hover:bg-primary group-hover:text-white transition ease-linear duration-200">{item.eco}</div>
        <div className="flex">
        <p className="leading-relaxed font-main text-center p-8">Card Description</p>
        <p className="leading-relaxed font-main text-center p-8">Footprint = {item.ecoFootPrint}g of CO2e</p>
        <div className="flex leading-relaxed text-green-300 font-main text-center p-8 underline">
          Buy now
        </div>
        </div>
      </div>
    </div>
  </div>
          ))}
        </ul>
      ) : (
          <p className="flex justify-center py-8">Loading...</p>
        )}
      </div>

      {/* <FirebaseComponent /> */}
    </main>
  );
}
