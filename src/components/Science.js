import React from "react";
import Footer from "./Footer";
import "../components/styles/science.css";
const Science = () => {
  return (
    <>
      <div className="science-blocks">
        <h1 className="heading">science page</h1>
        <div className="img-block">
          <img src="./even_suspension.png" />
        </div>
        <div className="img-block">
          <img src="./lack_of_buoyoncy.png" />
        </div>
        <div className="img-block">
          <img src="./lack_of_thermal_convection.png" />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default Science;
