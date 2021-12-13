import { FunctionComponent, useEffect, useState } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { death } from "library/common/components/Main/Death/death";
import { SearchParamsType } from "library/common/constants/searchParams";
import BreakingBadApi from "main/api";

import "./styles.scss";

const api = BreakingBadApi.getInstance();

interface DeathDetailsProps {
  match: any;
}

const DeathDetails: FunctionComponent<DeathDetailsProps> = ({ match }) => {
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

  return death === undefined ? (
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Death} object={death} minified={false} />
  );
};

export default DeathDetails;
