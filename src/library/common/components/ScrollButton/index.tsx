import "./styles.scss";

const ScrollButton = () => {
  function scrollToTop() {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button id="scrollToTopBtn" onClick={() => scrollToTop()}>
      ☝🏻
    </button>
  );
};

export default ScrollButton;
