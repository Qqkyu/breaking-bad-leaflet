import { useEffect, useState } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { character } from "library/common/components/Main/Character/character";

import { SearchParamsType } from "library/common/constants/searchParams";
import BreakingBadApi from "main/api";

import "./styles.scss";

const api = BreakingBadApi.getInstance();

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
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Character} object={character} minified={false} />
  );
};

export default RandomCharacter;
