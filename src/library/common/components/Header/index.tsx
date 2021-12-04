import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import NavButton from "../NavButton";
import Logo from "resources/images/logo";

import "./styles.scss";

const Header: FunctionComponent = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Logo />
            </Link>
          </li>
          <li>
            <NavButton pathname={"/characters/random"} text={"Random character"} />
          </li>
          <li>
            <NavButton pathname={"/deaths/random"} text={"Random death"} />
          </li>
          <li>
            <NavButton pathname={"/quotes/random"} text={"Random quote"} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
