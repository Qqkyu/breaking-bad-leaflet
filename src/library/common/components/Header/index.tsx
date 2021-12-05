import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { IAppState } from "main/store/type";
import NavButton from "../NavButton";
import Logo from "resources/images/logo";

import "./styles.scss";

const Header: FunctionComponent = () => {
  const theme = useSelector((state: IAppState) => state.theme); // eslint-disable-line @typescript-eslint/no-unused-vars

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
      <hr />
    </header>
  );
};

export default Header;
