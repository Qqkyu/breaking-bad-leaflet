import { useEffect, useState } from "react";
import { useParams } from "react-router";

import data from "main/data";

import "./styles.scss";
import { SearchParamsType } from "library/common/constants/searchParams";
import Death from "library/common/components/Death";

const DeathDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    const deathData = data.getDataByTypeAndId(SearchParamsType.Death, numId);
    setState(Object.assign({ loading: false }, deathData));
  }, [id]);

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
