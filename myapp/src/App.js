import React, { useState } from "react";
import "./App.css";
import Hello from "./component/Hello";
import LandingPage from "./component/LandingPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Contactus from "./component/Contacts";
import { Routes, Route } from "react-router-dom";

function App() {
  // const contactDetails = {
  //   name: "Mukund Pasi ",
  //   phone: "9998030410",
  //   email: "mukpas999@gmail.com"
  // }

  // let obj = {
  //   name : "Mukund",
  //   age :"30",
  //   copyright : "MyCopyright"
  // }
  const [name, setName] = useState("Hero");
  const [viewPage, setViewPage] = useState(true);

  return (
    <div>
      {/* <Header name={name} setName={setName } setViewPage={setViewPage} viewPage={viewPage}></Header> */}
      {/* <Footer name={name}></Footer> */}

      {/* <Contactus contactDetails={contactDetails}></Contactus> */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
