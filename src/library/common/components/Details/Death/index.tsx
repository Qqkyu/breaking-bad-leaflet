import { useEffect, useState } from "react";

import Death from "library/common/components/Main/Death";
import api from "main/api";

import "./styles.scss";

const DeathDetails = ({ match }) => {
  const [state, setState] = useState({ loading: true });

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
    setState(Object.assign({ loading: false }, deathData));
  }

  return (
    <div>
      {state.loading ? (
        <h2> Loading ... </h2>
      ) : (
        <div>
          <Death
            death_id={state["death_id"]}
            key={state["death_id"]}
            death={state["death"]}
            cause={state["cause"]}
            responsible={state["responsible"]}
            last_words={state["last_words"]}
            season={state["season"]}
            episode={state["episode"]}
            number_of_deaths={state["number_of_deaths"]}
          />
        </div>
      )}
    </div>
  );
};

export default DeathDetails;
