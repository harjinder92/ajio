import React from "react";
import ImageSlider from "react-auto-image-slider";
import { Slide } from "react-auto-image-slider";
import Image3 from "./Images/Image1.jpg";
import Image2 from "./Images/Image2.jpg";
import Image1 from "./Images/Image3.jpg";
import Footer from "./Footer";

const Offers = () => {
  return (
    <>
      <ImageSlider effectDelay={200} autoPlayDelay={1000}>
        <Slide>
          <img src={Image1} style={{ height: 500, width: 1200 }} />
        </Slide>
        <Slide>
          <img src={Image2} style={{ height: 500, width: 1200 }} />
        </Slide>
        <Slide>
          <img src={Image3} style={{ height: 500, width: 1200 }} />
        </Slide>
      </ImageSlider>

      <Footer />
    </>
  );
};

export default Offers;
