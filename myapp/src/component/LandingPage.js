import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LandingPage() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProduct(response.data.products);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center">Error occurred while fetching data.</div>
      ) : product.length !== 0 ? (
        product.map((element) => (
          <div className="col mb-4" key={element.id}>
            <div className="card h-100">
              <div className="card-body">
                <div className="card-title">
                  <img
                    src={element.thumbnail}
                    alt="Product Thumbnail"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-text text-center">
                  <div>
                    <strong>Product Title:</strong> {element.title}
                  </div>
                  <div>
                    <strong>Product Brand:</strong> {element.brand}
                  </div>
                  <div className="d-flex justify-content-between mt-3">
                    <button
                      className="btn btn-primary"
                      aria-label="Add to cart"
                    >
                      Add to cart
                    </button>
                    <button
                      className="btn btn-secondary"
                      aria-label="View Details"
                    >
                      View Details
                    </button>
                  </div>
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
