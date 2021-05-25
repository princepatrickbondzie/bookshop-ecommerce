import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Header from "../../Components/Header/Header";
import "./ProductDetails.css";
import { useCart, state } from "../../context/state";
// import {state} from "../../context/state";
// import Front from "../../images/83a41dd05863dcddca10cb786d9c936d.jpg";
import Category from "../../Components/Category";
// import ProductCart from "./Components/ProductCard";

const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  // const [productDetails, setProductDetail] = useState([]);
  // const { addToCart } = useState(useCart);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/products/${productId}`);
        const { product } = await res.json();
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProduct = async () => {
      fetch(`http://localhost:4000/products/?category=${product.category}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    } 
  })

  // if (productDetails.length === 0) return null;

  return (
    <>
      <div className="detail-main">
        <div>
          <Nav />
          <Header />
        </div>
        <div className="main-dtl">
          <aside id="cate">
            <Category id="cate-detail" />
          </aside>

          {/* RIGTH SECTION */}
          {Object.keys(product).length === 0 ? (
            <p>Loading....</p>
          ) : (
            <div>
              <div className="detail-options">
                <div className="detail-image gd">
                  <div>
                    <img
                      src={`http://localhost:4000/${product.image}`}
                      alt=""
                      id="d-img"
                    />
                  </div>
                </div>
                <div className="detail-container gd">
                  <div className="detail-buy">
                    <h2>{product.title}</h2>
                    <hr id="line" />
                    <br />
                    <div className="d-price">
                      Ghc{product.price}
                      <del>Ghc41.50</del>
                    </div>
                    <br />
                    <p className="descrip">{product.description}</p>
                    <br />
                    <br />
                    <div className="amt">
                      <span className="quty">Quantity</span>
                      <div
                        className="bttn decrease_"
                        id=""
                        value="Decrease Value"
                      >
                        -
                      </div>
                      <input type="number" name="qty" id="num" min="1" />
                      <div
                        className="bttn increase_"
                        id=""
                        value="Increase Value"
                      >
                        +
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="bttns">
                      <button id="add">Buy</button>
                      <button
                        id="add"
                        className="crt"
                        // onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <hr id="divider" />
              <div className="content">
                {product.description}
              </div>
            </div>
          )}
          <div className="similar-products">
            <div className="similar-one">
              <h4>Similar Books</h4>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
