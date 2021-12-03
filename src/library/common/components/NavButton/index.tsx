import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavButton: FunctionComponent<{ pathname: string; text: string }> = ({ pathname, text }) => {
  /*
  todo:
  fix refreshing of page, use react-router-dom built-in mechanism instead
  below function is just a workaround
  */
  function forceReloadOnSamePage() {
    if (window.location.href.endsWith(pathname)) {
      window.location.reload();
    }
  }

  return (
    <Link to={pathname} onClick={() => forceReloadOnSamePage()}>
      <button className="random-info-button">{text}</button>
    </Link>
  );
};

export default NavButton;
