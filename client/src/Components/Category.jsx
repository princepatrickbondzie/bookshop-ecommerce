import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/Category.css";
// import { GoPlus } from "react-icons/go";

const Category = () => {
  return (
    <div>
      <ul className="category">
        <li className="cg">
          <h3>CATEGORY</h3>
        </li>
        <li className="cg hd">Ebook</li>
        <li className="cg">Audio Books</li>
        <li className="cg head">Level</li>
        <li className="cg">Preschool</li>
        <li className="cg">Primary</li>
        <li className="cg">JHS</li>
        <li className="cg">SHS</li>
        <li className="cg">Tertiary</li>
        <li className="cg head">Topics</li>
        <li className="cg">Children</li>
        <li className="cg">Technology</li>
        <li className="cg">Programming</li>
        <li className="cg">Business</li>
        <li className="cg">Science</li>
        <li className="cg">Health</li>
        <li className="cg">Inspirational</li>
        <li className="cg">Story Books</li>
        <li className="cg"></li>
      </ul>
    </div>
  );
};

export default Category;
