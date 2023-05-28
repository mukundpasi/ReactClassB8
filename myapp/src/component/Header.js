import React from "react";
// import "./Header.css";
import Footer from "./Footer";

export default function Header({name, setName }) {
  function handleClick() {
    setName("Herovired")
  }
  
  return (
    <>
      <div>
        this is my header name is : {name}
        <button onClick={handleClick}>Change Name</button>

      </div>
    </>
  );
}
