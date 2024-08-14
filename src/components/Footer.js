import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <img src="./inbound-logo.png" width="150px" className="footer-logo" />
          <p className="newsletter-heading">
            Subscribe to Our
            <br /> News Letter
          </p>
          <div className="input-box">
            <input
              className="input-newsletter"
              placeholder="Enter your email"
            />
            <button className="submit-btn" type="submit">
              &rarr;
            </button>
          </div>
        </div>
        <div className="item-section">
          <ul className="section-item">
            <li>
              <a href="#" className="footer-item">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-item">
                Science
              </a>
            </li>
            <li>
              <a href="#" className="footer-item">
                Engine
              </a>
            </li>
          </ul>
        </div>
        <div className="item-section">
          <ul className="section-item">
            <li>
              <a href="#" className="footer-item">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="footer-item">
                Tracking
              </a>
            </li>
            <li>
              <a href="#" className="footer-item">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="item-section">
          <ul className="section-item">
            <li>
              <a href="#" className="footer-item">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer-item">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <hr />
      <div className="footnote">
        <p>© {new Date().getFullYear()} Inbound All Rights Reserved</p>
      </div>
    </>
  );
}
export default Footer;
