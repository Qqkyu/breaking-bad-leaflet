import { store } from "main/store/store";
import { ThunkDispatch } from "redux-thunk";
import { IAppState, IAppActions } from "main/store/type";

import { character } from "library/common/components/Character/character";
import { death } from "library/common/components/Death/death";
import { episode } from "library/common/components/Episode/episode";
import { quote } from "library/common/components/Quote/quote";
import { useSelector } from "react-redux";
import { fetchAndSetCharacters } from "library/common/actions/CharactersActions";

interface IBreakingBadApi {
  getAllCharacters: () => character[];
  /*
  getAllDeaths: () => death[];
  getAllEpisodes: () => episode[];
  getAllQuotes: () => quote[];

  getRandomCharacter: () => character;
  getRandomQuote: () => quote;
  getRandomDeath: () => death;
  */
}

export class BreakingBadApi implements IBreakingBadApi {
  getAllCharacters(): character[] {
    const characters = store.getState().charactersReducer.characters;
    if (characters?.length === 0) {
      (store.dispatch as ThunkDispatch<IAppState, unknown, IAppActions>)(fetchAndSetCharacters());
    }
    return store.getState().charactersReducer.characters;
  }
}
