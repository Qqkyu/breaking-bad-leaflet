import { useEffect, useState } from "react";

import ObjectFactory from "library/common/components/ObjectFactory";
import { death } from "library/common/components/Main/Death/death";

import { SearchParamsType } from "library/common/constants/searchParams";
import api from "main/api";

import "./styles.scss";

const DeathDetails = ({ match }) => {
  const [death, setDeath] = useState<death | undefined>(undefined);

  useEffect(() => {
    const numId = Number(match.params.id);
    if (match.params.id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    fetchDeath(numId);
  }, [match.params.id]);

  async function fetchDeath(id: number): Promise<void> {
    const deathData = await api.fetchDeathById(id);
    if (deathData === undefined) {
      throw RangeError("Invalid death id");
    }
    setDeath(deathData);
  }

  return death === undefined ? <h2> Loading ... </h2> : <ObjectFactory type={SearchParamsType.Death} object={death} />;
};

export default DeathDetails;
