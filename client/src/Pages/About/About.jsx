import React from "react";
import { NavLink } from "react-router-dom";
import "./About.css";
import { FaSearch, FaShippingFast } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { MdSecurity } from "react-icons/md";
import Nav from "../../Components/Nav/Nav";
import Shelf from "../../images/books-6065114_1920.jpg";
// import Header from "../../Components/Header/Header";
const About = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="main-about">
        <div className="vision">
          <img src={Shelf} alt="" id="shelf"/>
        </div>
        <div className="our-story">
          <h2>OUR STORY</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            culpa itaque distinctio beatae dolor quo deleniti enim quos impedit
            explicabo, corporis asperiores doloremque, ullam quam, assumenda
            quibusdam consequuntur esse maxime. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Rerum omnis, totam assumenda harum
            sapiente dolores ratione ipsam numquam aut ullam minus! Cumque esse
            a saepe at nesciunt cum numquam modi! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Rem tempora magnam recusandae
            voluptatum? Blanditiis dolore laudantium doloremque tenetur, rem
            nostrum corporis voluptatibus repellendus, eius dolores dolorem
            maiores temporibus cum voluptate? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Voluptatum fugit ipsam incidunt
            expedita delectus mollitia laudantium ipsa voluptas, dolore nihil.
            Quam amet at vero sunt libero ea temporibus repellat porro. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt
            doloribus mollitia ratione natus sequi, sint hic, nesciunt
            blanditiis illum porro dolorem a alias officiis minus sapiente
            delectus aliquid dolore.
          </p>
        </div>
        <div className="about-one">
          <h2>SERVICE</h2>
          <div className="services">
            <div className="service-one width">
              <div className="service-icon">
                <FaSearch size={90} />
              </div>
              <div className="service-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  nobis veritatis repellendus dolorum quisquam facilis labore,
                  laudantium, vitae exercitationem quasi maxime ad consectetur
                  fuga quibusdam magni. Quidem dolor nulla id!
                </p>
              </div>
            </div>

            <div className="service-two width">
              <div className="service-icon">
                <GiPayMoney size={90} />
              </div>
              <div className="service-text">
                <p>
                  Easy payment Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Vero nobis veritatis repellendus dolorum
                  quisquam facilis labore, laudantium, vitae exercitationem
                  quasi maxime ad consectetur fuga quibusdam magni. Quidem dolor
                  nulla id!
                </p>
              </div>
            </div>

            <div className="service-three width">
              <div className="service-icon">
                <FaShippingFast size={90} />
              </div>
              <div className="service-text">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                  nobis veritatis repellendus dolorum quisquam facilis labore,
                  laudantium, vitae exercitationem quasi maxime ad consectetur
                  fuga quibusdam magni. Quidem dolor nulla id!
                </p>
              </div>
            </div>

            <div className="service-two width">
              <div className="service-icon">
                <MdSecurity size={90} />
              </div>
              <div className="service-text">
                <p>
                  Easy payment Lorem ipsum, dolor sit amet consectetur
                  adipisicing elit. Vero nobis veritatis repellendus dolorum
                  quisquam facilis labore, laudantium, vitae exercitationem
                  quasi maxime ad consectetur fuga quibusdam magni. Quidem dolor
                  nulla id!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="abt-nav">
          <NavLink to="">Our Vision</NavLink>
          <NavLink to="">Services</NavLink>
          <NavLink to="">Staff</NavLink>
          <NavLink to="">Partners</NavLink>
        </div>
        <hr /> */}

        <div></div>
      </div>
    </div>
  );
};

export default About;
