/**
 * Smooth scrolling and active navigation highlight
 */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");

  // Function to update active link based on scroll position
  function updateActiveLink() {
    let current = "";
    const scrollPos = window.scrollY + 100; // offset for sticky header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.style.color = "";
      if (link.getAttribute("href") === `#${current}`) {
        link.style.color = "#b97f10";
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink);
  window.addEventListener("load", updateActiveLink);

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
