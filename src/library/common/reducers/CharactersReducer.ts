import { CharactersAction, CharactersState } from "./characters-type";
import { CharactersActionTypes } from "../actions/CharactersActions";

const initialState: CharactersState = {
  characters: [],
};

const charactersReducer = (state: CharactersState = initialState, action: CharactersAction): CharactersState => {
  switch (action.type) {
    case CharactersActionTypes.SET_CHARACTERS:
      const newCharacters = action.payload;
      return {
        ...state,
        characters: newCharacters,
      };
  }
  return state;
};

export default charactersReducer;
