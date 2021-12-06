import { useEffect, useState } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { character } from "library/common/components/Main/Character/character";

import { SearchParamsType } from "library/common/constants/searchParams";
import api from "main/api";

import "./styles.scss";

const CharacterDetails = ({ match }) => {
  const [character, setCharacter] = useState<character | undefined>(undefined);

  useEffect(() => {
    const numId = Number(match.params.id);
    if (match.params.id === undefined || !numId) {
      throw TypeError("Invalid character id");
    }
    fetchCharacter(numId);
  }, [match.params.id]);

  async function fetchCharacter(id: number): Promise<void> {
    const characterData = await api.fetchCharacterById(id);
    if (characterData === undefined) {
      throw RangeError("Invalid character id");
    }
    setCharacter(characterData);
  }

  return character === undefined ? (
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Character} object={character} minified={false} />
  );
};

export default CharacterDetails;
