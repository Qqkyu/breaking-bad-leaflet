import { ThemeAction, ThemeState } from "./theme-type";
import { Theme } from "../constants/theme";
import { ThemeActionTypes } from "../actions/ThemeActions";

const initialState: ThemeState = {
  theme: Theme.Dark,
};

const themeReducer = (state: ThemeState = initialState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.CHANGE_THEME:
      const newTheme = state.theme === Theme.Dark ? Theme.Light : Theme.Dark;
      return {
        ...state,
        theme: newTheme,
      };
  }
  return state;
};

export default themeReducer;
