import { FunctionComponent, useEffect, useState } from "react";

import { setCorrectDate } from "library/common/components/RandomInfo/Character/utils/character-utils";
import { character } from "library/common/components/Main/Character/character";
import ObjectFactory from "library/common/components/ObjectFactory";
import Loader from "library/common/components/Loader";
import { SearchParamsType } from "library/common/constants/searchParams";
import BreakingBadApi from "main/api";

import "./styles.scss";

const api = BreakingBadApi.getInstance();

const RandomCharacter: FunctionComponent = () => {
  const [character, setCharacter] = useState<character | undefined>(undefined);

  useEffect(() => {
    fetchRandomCharacter();
  }, []);

  async function fetchRandomCharacter(): Promise<void> {
    const characterData = await api.fetchRandomCharacter();
    setCorrectDate(characterData);
    setCharacter(characterData);
  }

  return character === undefined ? (
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Character} object={character} minified={false} />
  );
};

export default RandomCharacter;
