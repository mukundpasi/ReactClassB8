import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div className="row">
      {product.length !== 0 ? (
        product.map((element) => (
          <div className="col-md-3" key={element.id}>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <img
                    src={element.thumbnail}
                    alt="Product Thumbnail"
                    style={{ width: "200px", height: "200px" }}
                  />
                </div>
                <div className="card-text">
                  <div>Product Title: {element.title}</div>
                  <div>Product Brand: {element.brand}</div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
}
