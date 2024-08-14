import React, { useEffect } from "react";
import "../components/styles.css"; // Assuming you have a CSS file for the star styles

function Stars() {
  useEffect(() => {
    const starCount = 100;
    const starsContainer = document.querySelector(".stars");

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }
  }, []); // Empty dependency array means this runs once after the initial render

  return <div className="stars"></div>;
}

export default Stars;
