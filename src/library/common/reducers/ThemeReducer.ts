import { ThemeAction, ThemeState } from "./type";
import { Theme } from "../constants/theme";
import { themeActionTypes } from "../actions/ThemeActions";

const initialState: ThemeState = {
  theme: Theme.dark,
};

const reducer = (state: ThemeState = initialState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case themeActionTypes.CHANGE_THEME:
      const newTheme = state.theme === Theme.dark ? Theme.light : Theme.dark;
      return {
        ...state,
        theme: newTheme,
      };
  }
  return state;
};

export default reducer;
