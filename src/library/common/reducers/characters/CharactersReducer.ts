import { CharactersActions, CharactersState } from "library/common/reducers/characters/characters-type";
import { CharactersActionTypes } from "library/common/actions/CharactersActions";

const initialState: CharactersState = {
  characters: [],
  randomCharacter: undefined,
};

const charactersReducer = (state: CharactersState = initialState, action: CharactersActions): CharactersState => {
  switch (action.type) {
    case CharactersActionTypes.SET_CHARACTERS:
      const newCharacters = action.payload;
      return {
        ...state,
        characters: newCharacters,
      };
    case CharactersActionTypes.SET_RANDOM_CHARACTER:
      const newRandomCharacter = action.payload[0];
      return {
        ...state,
        randomCharacter: newRandomCharacter,
      };
  }
  return state;
};

export default charactersReducer;
