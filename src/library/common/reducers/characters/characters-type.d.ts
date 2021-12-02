import { character } from "library/common/components/Main/Character/character";

type CharactersState = {
  characters: character[];
  randomCharacter: character | undefined;
};

type CharactersAction = {
  type: string;
  payload: character[];
};

type RandomCharacterAction = {
  type: string;
  payload: character[];
};

type CharactersActions = CharactersAction | RandomCharacterAction;

type DispatchType =
  | ((args: CharactersAction) => CharactersAction)
  | ((args: RandomCharacterAction) => RandomCharacterAction);
