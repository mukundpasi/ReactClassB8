import React from "react";
// import "./Header.css";
import Title from "./subcomponent/Title";

export default function Header({ name, setName, viewPage, setViewPage }) {
  function handleClick() {
    setName("Herovired");
    setViewPage(false);
  }

  return (
    <>
      <div>
        this is my header name is : {name}
        <button onClick={handleClick}>Change Name</button>
        {viewPage ? <Title></Title> : null}
      </div>
    </>
  );
}
