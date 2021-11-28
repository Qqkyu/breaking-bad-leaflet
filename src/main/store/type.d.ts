import mainReducer from "main/store/mainReducer";
import { CharactersActions } from "library/common/reducers/characters/characters-type";
import { ThemeAction } from "library/common/reducers/theme/theme-type";
import { DeathsActions } from "library/common/reducers/deaths/deaths-type";
import { EpisodesAction } from "library/common/reducers/episodes/episodes-type";
import { QuotesActions } from "library/common/reducers/quotes/quotes-type";

type IAppActions = ThemeAction | CharactersActions | DeathsActions | EpisodesAction | QuotesActions;
type IAppState = ReturnType<typeof mainReducer>;
type IAppDispatch = ThunkDispatch<IAppState, any, IAppActions>;
