import React, {useState} from "react";
import './App.css';
import Hello from './component/Hello';
import Header from './component/Header';
import Footer from "./component/Footer";
import Contactus from './component/Contacts';

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
  const [name, setName] = useState("Hero")
  const [viewPage, setViewPage] = useState(true)

  return (
    <div>
      <Header name={name} setName={setName } setViewPage={setViewPage} viewPage={viewPage}></Header>
      {/* <Footer name={name}></Footer> */}

      {/* <Contactus contactDetails={contactDetails}></Contactus> */}
    </div>
  );
}

export default App;
