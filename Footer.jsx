import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div classNameName="box">
        <div className="row1">
          <div className="column">
            <h4>AJIO</h4>
            <p>
              <Link to="/aboutus">About us</Link>
            </p>
            <p>Terms & Conditions</p>
            <p>Return & Refund policy</p>
          </div>
          <div className="column">
            <h4>SHOP BY</h4>
            <p>
              <Link to="/">Home</Link>
            </p>
            <p>
              <Link to="/products">Latest Arrivals</Link>
            </p>
            <p>Offers</p>
          </div>
          <div className="column">
            <h4>HELP</h4>
            <p>Payments</p>
            <p>Track your order</p>
            <p>Returns</p>
            <p> Cancellations</p>
          </div>
          <div className="column">
            <h4>FOLLOW US</h4>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Pinterest</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
