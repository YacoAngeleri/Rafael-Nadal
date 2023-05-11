const showOnPx = 100;
const botonVolverInicio = document.querySelector(".back-to-top");
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    botonVolverInicio.classList.remove("hidden");
  } else {
    botonVolverInicio.classList.add("hidden");
  }
});

const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

botonVolverInicio.addEventListener("click", goToTop);