import React, { useEffect } from "react";

export default function LandingPage() {
  console.log("1111111111");
  useEffect(() => {
    console.log("i am in header");
    let body = document.querySelector(".header");
    console.log(body);
  }, []);

  console.log("222222222222222");

  return <div className="header">LandingPage</div>;
}
