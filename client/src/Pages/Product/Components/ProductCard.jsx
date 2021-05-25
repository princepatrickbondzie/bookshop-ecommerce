import React from "react";
import { ProviderContextProvider } from "../../../context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  // const { product, setProduct } = useContext(ProviderContextProvider);
  // const ProductContext = createContext()

  console.log(product);
  return (
    <div className="products">
      <div className="book-card-container">
        <div className="image-container">
          <img src={`/${product.image}`} alt="" id="book-image" />
        </div>
        <div>
          <Link to="/product" className="book-title">
            {product.title}
          </Link>
        </div>
        <div className="book-price">
          <div className="prices">Ghc{product.price}</div>
          <button id="added">
            <Link to={`/product-details/${product._id}`}>Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
