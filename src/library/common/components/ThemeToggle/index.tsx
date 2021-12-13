import { FunctionComponent } from "react";

import "./styles.scss";

interface ThemeToggleProps {
  changeTheme: () => void;
}

const ThemeToggle: FunctionComponent<ThemeToggleProps> = ({ changeTheme }) => {
  return (
    <div className="wrapper">
      <input type="checkbox" name="checkbox" className="switch" onClick={() => changeTheme()} />
    </div>
  );
};

export default ThemeToggle;
