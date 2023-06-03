import React, { useEffect, useState } from "react";

export default function LandingPage() {
    const [counter, setCounter] = useState(0)
  console.log("1111111111");
  useEffect(() => {
    console.log("i am in header");
    let body = document.querySelector(".header");
    console.log(body);
  }, [counter]);

  console.log("222222222222222");

  return <div className="header">LandingPage
  <button onClick={()=>setCounter(counter + 1)}>+</button>
  </div>;

  
}
