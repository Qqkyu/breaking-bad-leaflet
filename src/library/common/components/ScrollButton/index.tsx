import { FunctionComponent } from "react";

import "./styles.scss";

interface ScrollButtonProps {
  scrollToTop: () => void;
}

const ScrollButton: FunctionComponent<ScrollButtonProps> = ({ scrollToTop }) => {
  return (
    <button id="scrollToTopBtn" onClick={() => scrollToTop()}>
      ☝🏻
    </button>
  );
};

export default ScrollButton;
