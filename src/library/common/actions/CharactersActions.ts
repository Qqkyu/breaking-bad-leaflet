import { character } from "../components/Character/character";
import { apiMainPath, apiPaths } from "../constants/apiPaths";
import { Dispatch } from "redux";

export enum CharactersActionTypes {
  SET_CHARACTERS = "SET_CHARACTERS",
}

export function setCharacters(characters: character[]) {
  return {
    type: CharactersActionTypes.SET_CHARACTERS,
    payload: characters,
  };
}

export function fetchAndSetCharacters() {
  const apiPath = apiMainPath + apiPaths.AllCharacters;

  return async function (dispatch: Dispatch) {
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    dispatch(setCharacters(jsonRes));
  };
}
