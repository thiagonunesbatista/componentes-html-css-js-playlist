const backToTopElement = document.getElementById("back-to-top-button");

const handleBackToTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

backToTopElement.addEventListener("click", handleBackToTop);

const elementToObserve = document.querySelector(".content p:first-of-type");

const options = {
  root: null,
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0
};

const handleBackToTopVisibility = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      backToTopElement.classList.add("back-to-top-visible");
      return;
    }

    backToTopElement.classList.remove("back-to-top-visible");
  });
};

const observer = new IntersectionObserver(handleBackToTopVisibility, options);

observer.observe(elementToObserve);
