import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Episode from "library/common/components/Main/Episode";
import api from "main/api";

import "./styles.scss";

const EpisodeDetails = () => {
  const { id } = useParams();
  const [state, setState] = useState({ loading: true });

  useEffect(() => {
    const numId = Number(id);
    if (id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    fetchEpisode(numId);
  }, [id]);

  async function fetchEpisode(id: number): Promise<void> {
    const episodeData = await api.fetchEpisodeById(id);
    if (episodeData === undefined) {
      throw RangeError("Invalid episode id");
    }
    setState(Object.assign({ loading: false }, episodeData));
  }

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
