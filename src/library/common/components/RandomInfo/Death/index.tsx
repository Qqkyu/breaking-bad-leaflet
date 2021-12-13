import { useEffect, useState, memo } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { death } from "library/common/components/Main/Death/death";

import { SearchParamsType } from "library/common/constants/searchParams";
import BreakingBadApi from "main/api";

import "./styles.scss";

const api = BreakingBadApi.getInstance();

const RandomDeath = () => {
  const [death, setDeath] = useState<death | undefined>(undefined);

  useEffect(() => {
    fetchRandomDeath();
  }, []);

  async function fetchRandomDeath(): Promise<void> {
    const deathData = await api.fetchRandomDeath();
    setDeath(deathData);
  }

  return death === undefined ? (
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Death} object={death} minified={false} />
  );
};

export default memo(RandomDeath);
