import mainReducer from "main/store/mainReducer";
import { CharactersAction } from "library/common/reducers/characters/characters-type";
import { ThemeAction } from "library/common/reducers/theme/theme-type";
import { DeathsAction } from "library/common/reducers/deaths/deaths-type";
import { EpisodesAction } from "library/common/reducers/episodes/episodes-type";
import { QuotesAction } from "library/common/reducers/quotes/quotes-type";

type IAppActions = ThemeAction | CharactersAction | DeathsAction | EpisodesAction | QuotesAction;
type IAppState = ReturnType<typeof mainReducer>;
type IAppDispatch = ThunkDispatch<IAppState, any, IAppActions>;
