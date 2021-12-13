import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

interface NavButtonProps {
  pathname: string;
  text: string;
}

const NavButton: FunctionComponent<NavButtonProps> = ({ pathname, text }) => {
  return (
    <Link to={pathname}>
      <button className="nav-button">{text}</button>
    </Link>
  );
};

export default NavButton;
