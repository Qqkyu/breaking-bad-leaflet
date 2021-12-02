import { character } from "../components/Main/Character/character";

export enum CharactersActionTypes {
  SET_CHARACTERS = "SET_CHARACTERS",
  SET_RANDOM_CHARACTER = "SET_RANDOM_CHARACTER",
}

export function setCharacters(characters: character[]) {
  return {
    type: CharactersActionTypes.SET_CHARACTERS,
    payload: characters,
  };
}

export function setRandomCharacter(character: character) {
  return {
    type: CharactersActionTypes.SET_RANDOM_CHARACTER,
    payload: character,
  };
}
