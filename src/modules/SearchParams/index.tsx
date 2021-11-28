import React from "react";
import { Dispatch } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { character } from "library/common/components/Character/character";
import { Theme } from "library/common/constants/theme";

import "./searchParamsStyles.scss";
import { IAppState } from "main/store/type";

type Props = {
  changeTheme: () => void;
};

const SearchParams: React.FC<Props> = ({ changeTheme }) => {
  const theme: Theme = useSelector((state: IAppState) => state.theme.theme, shallowEqual);
  const characters: character[] = useSelector((state: IAppState) => state.characters.characters, shallowEqual);

  const dispatch: Dispatch<any> = useDispatch();

  const changeThemeCallback = React.useCallback(() => dispatch(changeTheme()), [dispatch, changeTheme]);

  return (
    <div>
      <h1>Breaking Bad Leaflet - SearchParams</h1>
      <h2>Theme: {theme}</h2>
      <button onClick={() => changeThemeCallback()}>Change theme</button>
      <h3>Character: {characters?.length ? characters[0].name : "loading.."}</h3>
    </div>
  );
};

export default SearchParams;
