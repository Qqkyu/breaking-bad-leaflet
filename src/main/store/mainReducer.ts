import { combineReducers } from "redux";

import charactersReducer from "library/common/reducers/CharactersReducer";
import themeReducer from "library/common/reducers/ThemeReducer";

const mainReducer = combineReducers({
  charactersReducer,
  themeReducer,
});

export default mainReducer;
