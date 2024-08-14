import React from "react";
import "./styles/impact.css";

function Impact() {
  return (
    <div className="impact-section">
      <h1 className="heading">IMPACT</h1>
      <div className="card-section">
        <div className="card">
          <img
            className="impact-img"
            src="./impact1.jpg"
            alt="img"
            height="150"
            width="150"
          />
          <p>Wide band gap semiconductors for power electronics.</p>
        </div>
        <div className="card">
          <img
            className="impact-img"
            src="./impact2.png"
            alt="img"
            height="150"
            width="150"
          />
          <p>
            High - purity protein crystals
            <br />
            for pharmaceuticals
          </p>
        </div>
        <div className="card">
          <img
            className="impact-img"
            src="./impact3.jpg"
            alt="img"
            height="150"
            width="150"
          />
          <p>Scaffold-free 3D Bio-printing</p>
        </div>
        <div className="card">
          <img
            className="impact-img"
            src="./impact4.jpg"
            alt="img"
            height="150"
            width="150"
          />
          <p>Protein-based artificial retinas</p>
        </div>
        <div className="card">
          <img
            className="impact-img"
            src="./impact5.jpg"
            alt="img"
            height="150"
            width="150"
          />
          <p>Wider bandwidth fiber optics</p>
        </div>
      </div>
    </div>
  );
}
export default Impact;
