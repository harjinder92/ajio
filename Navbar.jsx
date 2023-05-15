import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faShoppingCart } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <div className="navigation-bar">
        <div className="button1">
          <button>login</button>
          <button>Register</button>
          <button>
            <Link to="/cart">
              Cart({state.length})
              <FontAwesomeIcon icon={faShoppingCart} size="xl" />
            </Link>
          </button>
        </div>
        <h1 className="logo">AJIO</h1>

        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} size="xl" />
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/aboutus">About us</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
