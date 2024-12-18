/**
 window.onload = function() {
    alert("This webpage is still under development!");
};

 */

const textArray = [
    "Very adaptive",
    "hard working",
    "very reliable",
    "Innovative Designer",
    "front-end developer",
    "Passionate programmer",
    "back-end developer",
    "Creative Thinker",
    "Critical Thinker",
  ];
  let index = 0;
  let charIndex = 0;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenWords = 2000;
  const dynamicText = document.getElementById("dynamic-text");
  const cursor = document.querySelector(".cursor");
  
  function type() {
    if (charIndex < textArray[index].length) {
      dynamicText.textContent += textArray[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenWords);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      dynamicText.textContent = textArray[index].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      index = (index + 1) % textArray.length;
      setTimeout(type, typingSpeed + 300);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, delayBetweenWords);
  });
  


  

// Add event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    // Back-to-top button functionality
    const backToTopButton = document.querySelector(".back-to-top");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add("visible");
      } else {
        backToTopButton.classList.remove("visible");
      }
    });
  
    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  
    // Add glowing shapes dynamically
    const heroSection = document.querySelector(".hero");
    const shapesContainer = document.createElement("div");
    shapesContainer.classList.add("shapes");
    heroSection.appendChild(shapesContainer);
  
    const shapes = [
      { class: "shape1", size: 150, animationDelay: "0s" },
      { class: "shape2", size: 200, animationDelay: "2s" },
      { class: "shape3", size: 100, animationDelay: "4s" },
    ];
  
    shapes.forEach((shape) => {
      const div = document.createElement("div");
      div.classList.add("shape", shape.class);
      div.style.width = `${shape.size}px`;
      div.style.height = `${shape.size}px`;
      div.style.animationDelay = shape.animationDelay;
      shapesContainer.appendChild(div);
    });
  
    // Skills progress animation
    const skillElements = document.querySelectorAll(".skills .skill");
    skillElements.forEach((skill) => {
      const progress = skill.dataset.progress || "50%";
      skill.style.setProperty("--progress", progress);
    });
  
    // Smooth section scroll for navigation links
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    // Animate name glow
    const glowTitle = document.querySelector("h1.glow");
    const subtitle = document.querySelector("h2.subtitle");
  
    function animateGlowText() {
      let colors = ["#0d6efd", "#ff6f61", "#6a0572", "#ffcc00"];
      let currentIndex = 0;
  
      setInterval(() => {
        currentIndex = (currentIndex + 1) % colors.length;
        glowTitle.style.textShadow = `0 0 10px ${colors[currentIndex]}, 0 0 20px ${colors[(currentIndex + 1) % colors.length]}, 0 0 30px ${colors[(currentIndex + 2) % colors.length]}`;
      }, 1500);
    }
  
    function fadeInSubtitle() {
      subtitle.style.opacity = 0;
      subtitle.style.transform = "translateY(20px)";
      let opacity = 0;
      let translateY = 20;
      const interval = setInterval(() => {
        if (opacity >= 1) {
          clearInterval(interval);
        } else {
          opacity += 0.05;
          translateY -= 1;
          subtitle.style.opacity = opacity;
          subtitle.style.transform = `translateY(${translateY}px)`;
        }
      }, 50);
    }
  
    // Start animations
    animateGlowText();
    fadeInSubtitle();
  });

  
  document.addEventListener("DOMContentLoaded", () => {
    // Animate progress bars
    const progressBars = document.querySelectorAll(".progress-bar");
  
    progressBars.forEach((bar) => {
      const skillLevel = bar.getAttribute("data-skill");
      const progress = bar.querySelector("::after");
      bar.style.setProperty("--skill-level", skillLevel + "%");
    });
  
    // Glow effect on profile picture
    const profilePicture = document.querySelector(".profile-picture");
  
    profilePicture.addEventListener("mouseenter", () => {
      profilePicture.style.boxShadow = "0 0 30px #ff6f61, 0 0 60px #0d6efd";
    });
  
    profilePicture.addEventListener("mouseleave", () => {
      profilePicture.style.boxShadow = "0 0 20px #ff6f61, 0 0 40px #0d6efd";
    });
  });
  
/*
// Skills progress animation on page load
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const skillLevel = bar.getAttribute("data-skill");
    bar.style.width = skillLevel + "%";
  });
});
*/

  document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".progress-bar");

    skillBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      const percentageText = bar.nextElementSibling;

      let counter = 0; // For percentage text animation
      const speed = 20; // Adjust speed for percentage counting

      // Set bar animation
      setTimeout(() => {
        bar.style.width = percentage + "%";
      }, 100); // Small delay to sync animation

      // Animate percentage text
      const animatePercentage = setInterval(() => {
        if (counter >= percentage) {
          clearInterval(animatePercentage);
        } else {
          counter++;
          percentageText.textContent = counter + "%";
        }
      }, speed);
    });
  });


