import "./styles/product.css";
import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Product = () => {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const maxScroll = 200;
    const newOpacity = 1 - scrollTop / maxScroll;
    setOpacity(Math.max(newOpacity, 0));
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="main">
        <div className="body">
          <div className="title">
            <div className="heading" style={{ opacity }}>
              <p>ENGINE</p>
              <p className="sub">SENDING HUMANS AND CARGO INTO SPACE</p>
            </div>
          </div>
          <div className="image" style={{ opacity }}>
            <img src="scroll_down.png" />
          </div>
        </div>
        <div className="row p-3">
          <div className="col-6">
            <p className="overview">Overview</p>
            <table className="table">
              <tr>
                <td>HEIGHT</td>
                <td>40kg</td>
              </tr>
              <tr>
                <td>HEIGHT</td>
                <td>40kg</td>
              </tr>
              <tr>
                <td>HEIGHT</td>
                <td>40kg</td>
              </tr>
              <tr>
                <td>HEIGHT</td>
                <td>40kg</td>
              </tr>
              <tr>
                <td>HEIGHT</td>
                <td>40kg</td>
              </tr>
              <tr>
                <td>HEIGHT</td>
                <td>40kg</td>
              </tr>
            </table>
          </div>
          <div className="col-6 rockets">
            <img src="engine2.png" className="gifs" />
          </div>
        </div>
        <div className="engines">
          <div></div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Product;
