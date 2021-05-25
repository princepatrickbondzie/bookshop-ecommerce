import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div id="dash">
      <aside id="dash-nav">
        <ul>
          <div id="adm">Avatar Profile</div>
          <li id="dashb">Dashboard</li>
          <li>Customers</li>
          <li>Products</li>
          <li><NavLink to="/createproduct">Create Product</NavLink></li>
          <li>Orders</li>
          <li>Analytics</li>
        </ul>
      </aside>
      <div></div>
    </div>
  );
};

export default AdminPage;
