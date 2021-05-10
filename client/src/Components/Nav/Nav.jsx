import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Nav = () => {
  return (
    <div className="nav dfs" id="sbs">
      <div className="ct dfs sb">
        <div className="dfs fw" style={{ color: "white" }}>
          <FiPhoneCall />
          +233200022002
        </div>
        <div className="dfs mg fw" style={{ color: "white" }}>
          <AiOutlineMail />
          info@nationbooks.com
        </div>
      </div>
      <div className="gitin">
        <ul className="log dfs" id="sbs">
          <li>
            <NavLink to="/register" className="re mg">
              Register
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="re mg">
              Login
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/" className="re mg">
              Logout
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="re mg">
              Admin
            </NavLink>
          </li>
          <li>
            <button>
              <NavLink to="/createproduct" className="re mg">
                Create Product
              </NavLink>
            </button>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
