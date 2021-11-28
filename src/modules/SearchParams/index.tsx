import { Theme } from "library/common/constants/theme";
import { ThemeState } from "library/common/reducers/theme-type";
import React from "react";
import { Dispatch } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import "./searchParamsStyles.scss";

type Props = {
  changeTheme: () => void;
};

const SearchParams: React.FC<Props> = ({ changeTheme }) => {
  const theme: Theme = useSelector((state: ThemeState) => state.theme, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const changeThemeCallback = React.useCallback(() => dispatch(changeTheme()), [dispatch, changeTheme]);

  return (
    <div>
      <h1>Breaking Bad Leaflet - SearchParams</h1>
      <h2>Theme: {theme}</h2>
      <button onClick={() => changeThemeCallback()}>Change theme</button>
    </div>
  );
};

export default SearchParams;
