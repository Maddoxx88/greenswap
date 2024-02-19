import Image from "next/image";
import gsGetData from "./firebase.js";

export default function Home() {
  var v;
  gsGetData("field1").then((value) => {
    console.log(value);
    v = value;
  });
  return (
    <main>
      <div>
        <h2>Hello</h2>
      </div>
    </main>
  );
}
