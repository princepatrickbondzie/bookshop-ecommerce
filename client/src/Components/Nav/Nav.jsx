import React from "react";
import "./Nav.css";
import { useUserState } from "../../state/store";
import { NavLink, Link } from "react-router-dom";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Nav = (props) => {
  const isLoggedIn = useUserState((state) => state.isLoggedIn);
  const logout = useUserState((state) => state.logOut);
  const user = useUserState((state) => state.user);

  console.log(isLoggedIn);
  // const Admin = useUserStore((state) => state.userState.Admin);

  return (
    <div className=" dfs main-nav-container" id="sbs">
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
        {isLoggedIn ? (
          <div>
            <Link to="/account">{user?.firstName}</Link>
            <button onClick={() => logout()} id="logout">Logout</button>
          </div>
        ) : (
          <ul className="log dfs" id="sbs">
            <li id="reg">
              <NavLink to="/register" className="re">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="re">
                Login
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
