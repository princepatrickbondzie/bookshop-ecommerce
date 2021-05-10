import React from "react";
import "../../Pages/Product/Components/ProductCard.css";
import "./Children.css";
import { Link } from "react-router-dom";
import Colour from "../../images/Copy-to-color-baby-animals.jpg";
import Colour1 from "../../images/Copy-to-color-fruits.jpg";
import Colour2 from "../../images/Copy-to-colour-Cartoons.jpeg";
import Colour3 from "../../images/Copy-to-colour-Good-Habits.jpg";

const Children = () => {
  return (
    <div className="children-books">
      <div className="book-card-container">
        <div className="image-container">
          <img src={Colour} alt="" id="book-image" />
        </div>
        <div>
          <Link to="/productdetails" className="book-title">
            Copy To Colour Baby Ani..
          </Link>
        </div>
        <div className="book-price">Ghc20.00</div>
      </div>

      <div className="book-card-container">
        <div className="image-container">
          <img src={Colour1} alt="" id="book-image" />
        </div>
        <div>
          <Link to="/productdetails" className="book-title">
            Copy To Colour Fruits
          </Link>
        </div>
        <div className="book-price">Ghc20.00</div>
      </div>

      <div className="book-card-container">
        <div className="image-container">
          <img src={Colour2} alt="" id="book-image" />
        </div>
        <div>
          <Link to="/productdetails" className="book-title">
            Copy To Colour Cartoons
          </Link>
        </div>
        <div className="book-price">Ghc20.00</div>
      </div>

      <div className="book-card-container">
        <div className="image-container">
          <img src={Colour3} alt="" id="book-image" />
        </div>
        <div>
          <Link to="/productdetails" className="book-title">
            Copy To Colour Cartoons
          </Link>
        </div>
        <div className="book-price">Ghc20.00</div>
      </div>
    </div>
  );
};

export default Children;
