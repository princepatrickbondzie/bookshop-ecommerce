import React from "react";
import "./Display.css";
import Children from "./Samples/Children";
import { NavLink, Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
// import Stack from "../images/Blue Flat & Minimalist Kids Fashion Website2.png";
import El from "../images/356886cd6d545cb2ba14ccd785ec83f7.jpg";
import Marco from "../images/73d15e1dc062d663620ccf2c0542e4e9.jpg";
import { FaShippingFast } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import Courses from "./Courses/Courses";
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Display = () => {
  return (
    <div className="main">
      <div className="first-container">
        <div className="inner-one globe">
          <Carousel />
        </div>
        <div className="inner-two dg globe">
          <Link to="/shipping" className=" df">
            <div className="grid">
              <FaShippingFast size={35} id="ico" />
            </div>
            <div className="tt">
              <h4>Nationwide Delivery</h4>
              <p>Fast and Secure.</p>
            </div>
          </Link>
          <br />
          <Link to="/contact" className="df">
            <div className="grid">
              <FaPhoneSquareAlt size={33} id="ico" />
            </div>
            <div className="tt">
              <h4>Help Center</h4>
              <p>How can we help?</p>
            </div>
          </Link>
          <br />
          <Link to="/merchant" className="df " >
            <div className="grid">
              <GiTakeMyMoney size={35} id="ico" />
            </div>
            <div className="tt">
              <h4>Become a Merchant</h4>
              <p>Grow your business.</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="second-container globe">
        <div className="card one">
          <div className="card-image-container">
            <img src={El} alt="" className="card-image" />
          </div>
          <div className="card-text">
            <p>
              <h3 id="top">CALEGAS EL RASCAS</h3>Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptatibus assumenda eaque
              accusamus incidunt at culpa voluptatum impedit.
            </p>
            <p className="price">Ghc25.99</p>
            <button>Order now</button>
          </div>
        </div>

        <div className="card one">
          <div className="card-image-container">
            <img src={Marco} alt="" className="card-image" />
          </div>
          <div className="card-text">
            <p>
              <h3 id="top">MARCO MACACO</h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus assumenda eaque accusamus incidunt at culpa
              voluptatum impedit.
            </p>
            <p className="price">Ghc20.50</p>
            <button>Order now</button>
          </div>
        </div>
      </div>

      <div className="third-container globe">
        <div className="third-one">
          <div className="third-one-one">
            <h4>Children Books</h4> | <p>Up to 50% disconut</p>
          </div>
          <div className="link">
            <NavLink to="/">
              SEE ALL
              <div>
                <IoMdArrowDropright size={22} />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="third-two">
          <Children />
        </div>
      </div>

      <div className="fourth-container">
        <Courses />
      </div>
    </div>
  );
};

export default Display;
