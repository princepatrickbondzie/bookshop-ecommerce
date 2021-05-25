import React from "react";
import "./Slider.css";
import { Carousel } from "react-responsive-carousel";
// import "./Carousel";
import Book2 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-2.jpg";
import Book1 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-6.jpg";
import Book4 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-4.jpg";
import Book3 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-3.jpg";
import Book5 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-5.jpg";
import Book201 from "../images/9e87732b9f765a5a466eb4c9fa2de9db.jpg";
import Book202 from "../images/35f7c23e611931a080ed7dbb417f21c3.jpg";
import Book203 from "../images/783443133200b9589ca49833f203cf5a.jpg";
import Book204 from "../images/a6e9fdfb7aaa08b16163896a11945aca.jpg";
import Book205 from "../images/ab6def93c0a3ebdfdc35eee087866b20 (1).jpg";

export default () => {
  return (
    <Carousel autoPlay interval={2000} infiniteLoop className="nut">
      <div className="slide-two slidess">
        <div className="slide-inners">
          <div className="slide-inner-big">
            <img src={Book201} alt="" />
          </div>
          <div id="slide-null">
            <h3>Top Children Books</h3>
            <div className="slide-small">
              <div className="slide-inner">
                <img src={Book202} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book203} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book204} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book205} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-one slidess">
        <div className="slide-inners">
          <div className="slide-inner-big">
            <img src={Book1} alt="" />
          </div>
          <div id="slide-null">
            <h3> Excellent Targeting Maths For Primary</h3>
            <div className="slide-small">
              <div className="slide-inner">
                <img src={Book2} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book3} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book4} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="slide-three slidess">
        <div className="slide-inners">
          <div className="slide-inner-big">
            <img src={Book1} alt="" />
          </div>
          <div id="slide-null">
            <h3> Excellent Targeting Maths For Primary</h3>
            <div className="slide-small">
              <div className="slide-inner">
                <img src={Book2} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book3} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book4} alt="" />
              </div>
              <div className="slide-inner">
                <img src={Book5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
