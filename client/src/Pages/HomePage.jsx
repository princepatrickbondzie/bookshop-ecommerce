import React from "react";
import Nav from "../Components/Nav/Nav";
import Header from "../Components/Header/Header.jsx";
import Category from "../Components/Category";
import Display from "../Components/Display.jsx";
// import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <div>
      <div>
        <Nav />
        <Header />
      </div>
      <div className="sections">
        <Category />
        <Display />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
