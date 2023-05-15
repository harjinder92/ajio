import React from "react";
import "./Home.css";
import Products from "./Products";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="parent-container">
        <img
          src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?cs=srgb&dl=pexels-ksenia-chernaya-3965545.jpg&fm=jpg"
          className="bg-img"
          alt="backgroud-img"
        />
        <h2>New Arrivals</h2>
      </div>
      <Products />
    </div>
  );
};

export default Home;
