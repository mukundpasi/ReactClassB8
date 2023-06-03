import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LandingPage() {
    const [counter, setCounter] = useState(0)
  console.log("1111111111");
  useEffect(() => {
    console.log("i am in header");
    let body = document.querySelector(".header");
    console.log(body);

    const apiCalling = async() => {
        try {
            let response = await axios.get("https://dummyjson.com/products")
            console.log(response.data.products);
            
        } catch (error) {
            console.log(error);
        }
    } 

    apiCalling();
  }, [counter]);

  console.log("222222222222222");

  return <div className="header">LandingPage
  <button onClick={()=>setCounter(counter + 1)}>+</button>
  </div>;

  
}
