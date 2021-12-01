import { useEffect, useState } from "react";
import { useParams } from "react-router";

import data from "main/data";

import "./styles.scss";
import { SearchParamsType } from "library/common/constants/searchParams";
import Episode from "library/common/components/Episode";

const EpisodeDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    const episodeData = data.getDataByTypeAndId(SearchParamsType.Episode, numId);
    setState(Object.assign({ loading: false }, episodeData));
  }, [id]);

  return (
    <div>
      {state.loading ? (
        <h2> Loading ... </h2>
      ) : (
        <div>
          <Episode
            episode_id={state["episode_id"]}
            key={state["episode_id"]}
            title={state["title"]}
            season={state["season"]}
            episode={state["episode"]}
            air_date={state["air_date"]}
            characters={state["characters"]}
            series={state["series"]}
          />
        </div>
      )}
    </div>
  );
};

export default EpisodeDetails;
