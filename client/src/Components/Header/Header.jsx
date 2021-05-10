import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { BsBag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div>
      <div className="header">
        <h1>Nation-Books</h1>
        <div className="list">
          <ul className="ul1 df">
            <li>
              <NavLink to="/" className="le">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="le">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="le">
                Magazine
              </NavLink>
            </li>
            <li>
              <NavLink to="/createproduct" className="le">
                Merchant
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="le">
                Audio Books
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="df nav-two">
        <form action="" className="fm df">
          <input type="text" id="search" placeholder="Enter your search...." />
          <button type="submit" id="btn" style={{ color: "black" }}>
            <FiSearch size={30} />
          </button>
        </form>

        <div className="add">
          <div className="wish df">
              <NavLink to="/profile" className="icon">
                <AiOutlineHeart size={25} />
              </NavLink>

            <div>
              <p id="txt">Wishlist</p>
            </div>
          </div>
          <div className="df cart-txt">
            <div className="cart icon">
              <BsBag size={22} />
            </div>
            <div>
              <div className="tt">
                {/* <p id="txt">Cart</p> */}
                <p id="txt">Ghc358.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
