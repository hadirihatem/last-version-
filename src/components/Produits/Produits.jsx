import React, { useState } from "react";
import { Image } from "antd";

import "./Produits.css";

const Produits = () => {
  return (
    <div className="Produits">
      <div className="P-title">
        <p className="first">first</p>
      </div>
      <div className="col">
        <div className="card card1">
          <h5>yedek</h5>
          <p>fi zebi</p>
          <Image className="image-P" src="1.jpg"/>
        </div>
        <div className="card card2 ">
          <h5>yedek</h5>
          <p>fi zebi</p>
          <Image className="image-P" src="2.jpg"/>
        </div>
        <div className="card card3">
          <h5>yedek</h5>
          <p>fi zebi</p>
          <Image className="image-P" src="3.jpg"/>
        </div>
        <div className="card card4">
          <h5>yedek</h5>
          <p>fi zebi</p>
          <Image className="image-P" src="Punchmachine.jpg"/>
        </div>
      </div>

      <div className="P-title">
        <p className="last">last</p>
      </div>
    </div>
  );
};

export default Produits;
