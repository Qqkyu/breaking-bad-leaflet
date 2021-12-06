import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { IAppState } from "main/store/type";

import "./styles.scss";

const ThemeToggle: FunctionComponent<{ changeTheme: () => void }> = ({ changeTheme }) => {
  const theme = useSelector((state: IAppState) => state.theme); // eslint-disable-line @typescript-eslint/no-unused-vars

  return (
    <div className="wrapper">
      <input type="checkbox" name="checkbox" className="switch" onClick={() => changeTheme()} />
    </div>
  );
};

export default ThemeToggle;
