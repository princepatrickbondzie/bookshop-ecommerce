import React from "react";
// import MagazineCard from "./MagazineCard";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import Category from "../../Components/Category";

const Mazagine = () => {
  return (
    <div>
      <div>
        <Nav />
        <Header />
      </div>
      <div className="m-divide">
        <aside>
          <Category /> 
        </aside>
        {/* <div>
          <MagazineCard />
        </div> */}
      </div>
    </div>
  );
};

export default Mazagine;
