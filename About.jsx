import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faIdBadge,
  faTruck,
} from "@fortawesome/fontawesome-free-solid";
import "./About.css";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <h2 style={{ alignItems: "center", marginTop: 50 }}>Who We Are</h2>
      <img
        src="https://assets.ajio.com/medias/sys_master/images/images/h5e/hfc/11339012800542/who-we-are-desktop.jpg"
        style={{ marginLeft: 50, marginTop: 100, width: 950 }}
      />
      <br />
      <br />
      <div className="container-abt">
        <h5>
          With the trendiest,freshest,and most unique styles from across India
          and the world, AJIO invites you to express your personal style
          fearlessly, and with a confidence and optimise that cannot be easily
          shaken.
        </h5>
      </div>
      <div className="row">
        <div className="col">
          <h3>AJIO OWN</h3>
          <p>
            AJIO OWN is our private label – that’s designed by us, and owned by
            you. If you’re looking for head-turning styles that are
            one-of-a-kind, AJIO OWN is what you should stock up on.
          </p>
        </div>
        <div className="col">
          <h3>Exclusive International Labels</h3>
          <p>
            We bring you the trendiest and most exclusive brands from around the
            world to your wardrobe. Forget scouring the net for what’s hot
            globally, we’ve got you covered.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>Capsule Collections</h3>
          <p>
            If there’s an occasion to express your personal style, we’ve got a
            capsule collection to match. Shopping for a specific mood, event or
            style story has never been easier.
          </p>
        </div>
        <div className="col">
          <h3>AJIO Style Tribe</h3>
          <p>
            A high-fashion editorial where we feature the internet’s coolest
            cats. It’s where you get to read the stories of these influencers
            and shop their stunning shoot looks.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h3>#AJIOtoday</h3>
          <p>
            Our daily trend spotlight that lets you in on what’s hip and
            happening, and what you should be carting right now. Like they say,
            a trend each day keeps the blues away!
          </p>
        </div>
        <div className="col">
          <h3>#recommendsAJIO</h3>
          <p>
            This is where we celebrate and showcase our most stylish customers,
            who’ve given us a shout-out on social while dressed in a trendy AJIO
            style. You could very well be on the list too.
          </p>
        </div>
        <div className="list">
          <ul>
            <li>
              <FontAwesomeIcon icon={faTruck} size="2xl" />
              EASY EXCHANGE
            </li>
            <li>
              <FontAwesomeIcon icon={faHandHoldingHeart} size="2xl" /> 100%
              HANDPICKED
            </li>
            <li>
              <FontAwesomeIcon icon={faIdBadge} size="2xl" /> ASSURED QUALITY
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
