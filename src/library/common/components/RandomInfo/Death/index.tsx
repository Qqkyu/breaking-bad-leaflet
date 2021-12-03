import { useEffect, useState } from "react";

import Death from "library/common/components/Main/Death";
import api from "main/api";

import "./styles.scss";

const RandomDeath = () => {
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    fetchRandomDeath();
  }, []);

  async function fetchRandomDeath(): Promise<void> {
    const deathData = await api.fetchRandomDeath();
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

export default RandomDeath;
