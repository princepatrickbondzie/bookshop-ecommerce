import React from "react";
import "./Courses.css";
import Img from "../../images/sincerely-media-u-VD_27I7zI-unsplash.jpg";
import Hard from "../../images/sincerely-media-LR8-8mpY7eI-unsplash.jpg";
import Zero from "../../images/daria-nepriakhina-xY55bL5mZAM-unsplash.jpg";
import Love from "../../images/sincerely-media-TwjZ62z58EQ-unsplash.jpg";

const Courses = () => {
  return (
    <div id="course-container">
      <div className="course-card">
        <div className="image-box">
          <img src={Img} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Children</span>
          <h2 className="card-title">Diary of a Wimpy Kid</h2>
          <small className="sub-title">The ugly truth.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">250.00</p>
            <p className="old-price">Ghc533</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Hard} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Business</span>
          <h2 className="card-title">Angus Buchan</h2>
          <small className="sub-title">Nobodles.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">99.00</p>
            <p className="old-price">Ghc113</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Zero} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Inspiration</span>
          <h2 className="card-title">Zero to One</h2>
          <small className="sub-title">Peter Thiel.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">100.00</p>
            <p className="old-price">Ghc129</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Love} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Story Book</span>
          <h2 className="card-title">Love Skip Jump</h2>
          <small className="sub-title">Sherney Bryan.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">56.00</p>
            <p className="old-price">Ghc69</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      {/* SECOND LINE */}

      <div className="course-card">
        <div className="image-box">
          <img src={Img} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Children</span>
          <h2 className="card-title">Diary of a Wimpy Kid</h2>
          <small className="sub-title">The ugly truth.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">250.00</p>
            <p className="old-price">Ghc533</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Hard} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Business</span>
          <h2 className="card-title">Angus Buchan</h2>
          <small className="sub-title">Nobodles.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">99.00</p>
            <p className="old-price">Ghc113</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Img} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Children</span>
          <h2 className="card-title">Diary of a Wimpy Kid</h2>
          <small className="sub-title">The ugly truth.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">250.00</p>
            <p className="old-price">Ghc533</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Zero} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Inspiration</span>
          <h2 className="card-title">Zero to One</h2>
          <small className="sub-title">Peter Thiel.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">100.00</p>
            <p className="old-price">Ghc129</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>

      <div className="course-card">
        <div className="image-box">
          <img src={Love} alt="" />
        </div>
        <div className="card-content">
          <span className="tag">Story Book</span>
          <h2 className="card-title">Love Skip Jump</h2>
          <small className="sub-title">Sherney Bryan.</small>
          <div className="rating">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <div className="price-box">
            <p id="price">56.00</p>
            <p className="old-price">Ghc69</p>
          </div>
          <button id="btnn">Order now</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
