import { FunctionComponent } from "react";

import "./styles.scss";

const ThemeToggle: FunctionComponent<{ changeTheme: () => void }> = ({ changeTheme }) => {
  return (
    <div className="wrapper">
      <input type="checkbox" name="checkbox" className="switch" onClick={() => changeTheme()} />
    </div>
  );
};

export default ThemeToggle;
