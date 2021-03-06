import { FunctionComponent, useEffect, useState } from "react";

import Loader from "library/common/components/Loader";
import ObjectFactory from "library/common/components/ObjectFactory";
import { episode } from "library/common/components/Main/Episode/episode";
import { SearchParamsType } from "library/common/constants/searchParams";
import BreakingBadApi from "main/api";

import "./styles.scss";

const api = BreakingBadApi.getInstance();

interface EpisodeDetailsProps {
  match: any;
}

const EpisodeDetails: FunctionComponent<EpisodeDetailsProps> = ({ match }) => {
  const [episode, setEpisode] = useState<episode | undefined>(undefined);

  useEffect(() => {
    const numId = Number(match.params.id);
    if (match.params.id === undefined || !numId) {
      throw TypeError("Invalid death id");
    }
    fetchEpisode(numId);
  }, [match.params.id]);

  async function fetchEpisode(id: number): Promise<void> {
    const episodeData = await api.fetchEpisodeById(id);
    if (episodeData === undefined) {
      throw RangeError("Invalid episode id");
    }
    setEpisode(episodeData);
  }

  return episode === undefined ? (
    <Loader />
  ) : (
    <ObjectFactory type={SearchParamsType.Episode} object={episode} minified={false} />
  );
};

export default EpisodeDetails;
