import React from "react";
import "./Vision.css";
import { FaBookReader, FaSchool } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillTags } from "react-icons/ai";

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vc one">
        <FaBookReader size={90} />
        <p id="vc-text">
          Provide easy and fast access to learning materials across the country.
        </p>
      </div>
      <div className="vc two">
        <BsPencilSquare size={90} />
        <p id="vc-text">Provide easy and fast access to learning materials.</p>
      </div>

      <div className="vc three">
        <FaSchool size={90} />
        <p id="vc-text">Provide easy and fast access to learning materials.</p>
      </div>

      <div className="vc four">
        <AiFillTags size={90} />
        <p id="vc-text">Provide easy and fast access to learning materials.</p>
      </div>
    </div>
  );
};

export default Vision;
