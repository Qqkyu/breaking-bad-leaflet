import { character } from "library/common/components/Main/Character/character";

type CharactersState = {
  characters: character[];
};

type CharactersAction = {
  type: string;
  payload: character[];
};

type DispatchType = (args: CharactersAction) => CharactersAction;
