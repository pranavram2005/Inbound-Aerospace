import React, { useEffect } from "react";
import "../components/styles.css"; // Assuming you have a CSS file for the star styles

function TextAnimation() {
  useEffect(() => {
    const logo = document.querySelector(".logo");
    logo.addEventListener("animationend", function () {
      const textContainer = document.querySelector(".text-container");
      textContainer.style.opacity = "1"; // Make the text container visible
      animateText();
    });

    function animateText() {
      const text = document.querySelector(".text");
      const originalText = text.textContent;
      text.textContent = ""; // Clear existing text

      let i = 0;
      const typingInterval = setInterval(function () {
        if (i < originalText.length) {
          text.textContent += originalText.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust typing speed as needed
    }
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <div className="text-container">
        <p className="text">From Space, For Earth</p>
      </div>
      <div className="scroll-down-arrow"></div>
    </div>
  );
}

export default TextAnimation;
