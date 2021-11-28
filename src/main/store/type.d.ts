import mainReducer from "main/store/mainReducer";
import { CharactersAction } from "../reducers/characters-type";
import { ThemeAction } from "../reducers/theme-type";

type IAppActions = ThemeAction | CharactersAction;
type IAppState = ReturnType<typeof mainReducer>;
type IAppDispatch = ThunkDispatch<IAppState, any, IAppActions>;
