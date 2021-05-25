import React from "react";
import Carousel from "react-elastic-carousel";
// import Item  from "react-elastic-carousel";
// import "./Slider.css";
import Book2 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-2.jpg";
import Book1 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-6.jpg";
import Book4 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-4.jpg";
import Book3 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-3.jpg";
import Book5 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-5.jpg";
// import Book6 from "../images/EXCELLENT-TARGETING-MATHS-PRIM-6.jpg";

const Slider = () => {
  return (
    <div className="slideshow">
      <Carousel
        itemsToShow={1}
        transitionMs={1500}
        // enableAutoPlay={true}
      >
        <div className="slide-one slidess">
          <div className="slide-inners">
            <div className="slide-inner-big">
              <img src={Book1} alt="" />
            </div>
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

        <div className="slide-two slidess">
          <div className="slide-inners">
            <div className="slide-inner-big">
              <img src={Book1} alt="" />
            </div>
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
      </Carousel>
    </div>
  );
};

export default Slider;
