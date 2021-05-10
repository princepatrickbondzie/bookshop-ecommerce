import React from "react";
import { NavLink } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="products">

      <div className="book-card-container">
        <div>
          <NavLink to="/product" className="image-container">
            <img src={product.image} alt="" id="book-image" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/product" className="book-title">
            {product.title}
          </NavLink>
        </div>
        <div className="book-price">{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
