import React from "react";
import "./MagazineCard.css";
import M001 from "../../images/8d207af6890ca280bee434fe6a586b78.jpg";

const MagazineCard = () => {
  return (
    <div>
        <div className="m-card">
            <div className="c-img">
            <img src={M001} alt="" />
            </div>
            <div className="c-detail">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto natus
                corrupti laborum nulla tempore veniam, inventore perspiciatis ullam
            </p>
            <p>Release Date: 20th Jan. 2022</p>
            <button>Pre Order</button>
            </div>
        </div>
          

        <div className="card one m-card">
            <div className="c-img-container">
            <img src={M001} alt="" className="c-image" />
            </div>
            <div className="card-text">
                <p>
                    <h3 id="top">CALEGAS EL RASCAS</h3>Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Voluptatibus assumenda eaque accusamus
                    incidunt at culpa voluptatum impedit.
                </p>
                <p className="price">Ghc25.99</p>
                <button>Order now</button>
            </div>
        </div>
    </div>
  );
};

export default MagazineCard;
