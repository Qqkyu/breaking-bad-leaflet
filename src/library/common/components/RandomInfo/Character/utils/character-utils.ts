import { character } from "library/common/components/Main/Character/character";

export function setCorrectDate(randomCharacter: character | undefined) {
  if (randomCharacter?.birthday == null) {
    return;
  }
  randomCharacter.birthday = randomCharacter.birthday.slice(0, 10);
}
