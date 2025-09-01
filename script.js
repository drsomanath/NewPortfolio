// Cinematic Scroll Effect
document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});

// Fade-in for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-visible");
    }
  });
});

document.querySelectorAll(".section").forEach(sec => {
  observer.observe(sec);
});
