import { useEffect, useState } from "react";

import ObjectFactory from "library/common/components/ObjectFactory";
import { death } from "library/common/components/Main/Death/death";

import { SearchParamsType } from "library/common/constants/searchParams";
import api from "main/api";

import "./styles.scss";

const RandomDeath = () => {
  const [death, setDeath] = useState<death | undefined>(undefined);

  useEffect(() => {
    fetchRandomDeath();
  }, []);

  async function fetchRandomDeath(): Promise<void> {
    const deathData = await api.fetchRandomDeath();
    setDeath(deathData);
  }

  return death === undefined ? <h2> Loading ... </h2> : <ObjectFactory type={SearchParamsType.Death} object={death} />;
};

export default RandomDeath;
