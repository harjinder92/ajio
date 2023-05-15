import React, { useEffect, useState } from "react";
import "./Products.css";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Products = () => {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    const result = await response.json();
    setFake(result);
  };
  const ShowProducts = () => {
    return (
      <div className="contain">
        {fake.map((product) => {
          return (
            <>
              <div className="box">
                <div class="card" key={product.id}>
                  <img src={product.image} className="pic" alt="" />
                  <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">£{product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      class="btn btn-outline-dark"
                    >
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <h1 className="header"> Latest Arrivals</h1>
      <hr />
      <ShowProducts />
      <Footer />
    </>
  );
};
export default Products;
