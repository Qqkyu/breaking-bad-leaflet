import { ThemeAction, ThemeState } from "library/common/reducers/theme/theme-type";
import { Theme } from "library/common/constants/theme";
import { ThemeActionTypes } from "library/common/actions/ThemeActions";

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
