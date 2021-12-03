import NavButton from "../NavButton";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
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
