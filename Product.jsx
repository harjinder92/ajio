import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCart, delCart } from "./redux/action";
import { useParams } from "react-router";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Product = () => {
  const [cartBtn, setCartBtn] = useState("Add to cart");
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    if (cartBtn === "Add to cart") {
      dispatch(addCart(product));
      setCartBtn("Remove from cart");
    } else {
      dispatch(delCart(product));
      setCartBtn("Add to cart");
    }
  };

  useEffect(() => {
    const getProducts = async () => {
      let response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProducts();
  });
  const handle = () => {
    navigate("/cart");
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="container-prod">
          <img src={product.image} alt="" height="400px" width="400px" />
          <div>
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h3 className=" max-wd-50">{product.title}</h3>
            <h3 className="display-6 fw-bold my-4">£ {product.price}/-</h3>
            <p>{product.description}</p>
            <button onClick={() => addProduct(product)}>{cartBtn}</button>
            <button onClick={handle}>Go to cart</button>
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <ShowProducts />
    </div>
  );
};

export default Product;
