export function scrollToTop() {
  const rootElement = document.documentElement;
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
