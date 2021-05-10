// import React, { useEffect} from 'react';
// import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";
// import ProductCart from "./Components/ProductCard";

const ProductDetails = ({ product }) => {
  return (
    <div className="pd">
      <div>
        <div>{product.bookimage}</div>
      </div>
      <div>
        <div>{product.title}</div>
        <div>
          <div>{product.bookprice}</div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input type="number" name="quantity" id="quantity" />
          </div>
        </div>
        <div>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
