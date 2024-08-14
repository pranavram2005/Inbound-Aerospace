document.addEventListener("DOMContentLoaded", function () {
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
        showScrollDownArrow(); // Call function to show scroll down arrow
      }
    }, 100); // Adjust typing speed as needed
  }

  function showScrollDownArrow() {
    const scrollDownArrow = document.querySelector(".scroll-down-arrow");
    scrollDownArrow.style.opacity = "1"; // Make the scroll down arrow visible
  }
});
