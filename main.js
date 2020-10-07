const selectElement = (element) => {
  return document.querySelector(element);
};

const menuToggle = selectElement(".sd-menu-toggle");
const body = selectElement("body");

menuToggle.addEventListener("click", () => {
  body.classList.toggle("open");
});

window.sr = ScrollReveal();

sr.reveal(".sd-animate-left", {
  origin: "left",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".sd-animate-right", {
  origin: "right",
  duration: 1000,
  distance: "25rem",
  delay: 300,
});

sr.reveal(".sd-animate-top", {
  origin: "top",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});

sr.reveal(".sd-animate-bottom", {
  origin: "bottom",
  duration: 1000,
  distance: "25rem",
  delay: 600,
});
