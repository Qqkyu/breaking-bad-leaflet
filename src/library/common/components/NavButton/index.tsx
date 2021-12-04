import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const NavButton: FunctionComponent<{ pathname: string; text: string }> = ({ pathname, text }) => {
  return (
    <Link to={pathname}>
      <button className="random-info-button">{text}</button>
    </Link>
  );
};

export default NavButton;
