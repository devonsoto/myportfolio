import { connect } from "http2";

async function getData() {
  console.log("get data");
  const res = await fetch("http://localhost:3000/api/quote");

  // console.log(res);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default function Quote() {
  const response = getData();

  console.log("-------t--------");
  console.log("response", response);

  return <div>test</div>;
}
