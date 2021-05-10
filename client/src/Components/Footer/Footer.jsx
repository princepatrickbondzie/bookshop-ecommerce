import React from "react";
import "./Footer.css";
import { IoLogoTwitter } from "react-icons/io";
import {
  FaInstagramSquare,
  FaCcVisa,
  FaPinterest,
  FaFacebookF,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-one ai">
        <div>
          <h4 id="social-txt">Get in connected with us on social networks!</h4>
        </div>
        <div className="media-container">
          <FaFacebookF className="fb media" />
          <IoLogoTwitter className="tw media" />
          <FaInstagramSquare className="ist media" />
          <FaPinterest className="ist media" />
        </div>
      </div>
      <div className="footer-two">
        <div className="two-one ai">
          <FaCcVisa className="pay" />
          <FaCcMastercard className="pay" />
          <FaCcPaypal className="pay" />
        </div>
        <div className="two-two ai">
          <h3 id="h3">LET US HELP YOU</h3>
          <ul>
            <li>
              <NavLink to="/help-center">Help Center</NavLink>
            </li>
            <li>
              <NavLink to="/how-to">How to buy on Nation Books</NavLink>
            </li>
            <li>
              <NavLink to="/delivery">Delivery Timelines</NavLink>
            </li>
            <li>
              <NavLink to="/bulk-purchase">Bulk Purchases</NavLink>
            </li>
            <li>
              <NavLink to="/return">Return Policy</NavLink>
            </li>
            <li>
              <NavLink to="/reports">Report a Product</NavLink>
            </li>
          </ul>
        </div>
        <div className="two-three ai">
          <h3>ABOUT NATION BOOKS</h3>
          <ul className="ai">
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/promotions">Promotions</NavLink>
            </li>
            <li>
              <NavLink to="/merchant">Become a Merchant</NavLink>
            </li>
            <li>
              <NavLink to="/shipping">Shipping Rates</NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-conditions">Terms and Conditions</NavLink>
            </li>
            <li>
              <NavLink to="/privacy">Privacy Policy</NavLink>
            </li>
          </ul>
        </div>
        <div className="two-four ai">
          <h3>SUBSCRIBE</h3>
          <form action="">
            <input
              type="text"
              name="email"
              placeholder="Enter E-mail Address"
            />
            <button type="submit">
              <GrSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
