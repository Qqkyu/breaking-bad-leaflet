import { useEffect, useState } from "react";

import ObjectFactory from "library/common/components/ObjectFactory";
import { character } from "library/common/components/Main/Character/character";

import { SearchParamsType } from "library/common/constants/searchParams";
import api from "main/api";

import "./styles.scss";

const RandomCharacter = () => {
  const [character, setCharacter] = useState<character | undefined>(undefined);

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  async function fetchRandomCharacter(): Promise<void> {
    const characterData = await api.fetchRandomCharacter();
    setCharacter(characterData);
  }

  return character === undefined ? (
    <h2> Loading ... </h2>
  ) : (
    <ObjectFactory type={SearchParamsType.Character} object={character} />
  );
};

export default RandomCharacter;
