import React, { useEffect, useState } from "react";
import axios from "axios";

export default function LandingPage() {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState([]);

  console.log("1111111111");
  useEffect(() => {
    console.log("i am in header");
    let body = document.querySelector(".header");
    console.log(body);

    const apiCalling = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response.data.products);
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    apiCalling();
  }, []);

  console.log("222222222222222");

  return (
    <div>
      {product.length !== 0 ? (
        product.map((element) => (
          <div className="card">
            <div>
              Image : {element.thumbnail}{" "}
              <img src={element.thumbnail} alt="Product Thumbnail" />
            </div>
            <div>Product Title : {element.title}</div>
            <div>Product Brand : {element.brand}</div>
          </div>
        ))
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
}
