import { episode } from "library/common/components/Main/Episode/episode";

export enum EpisodesActionTypes {
  SET_EPISODES = "SET_EPISODES",
}

export function setEpisodes(episodes: episode[]) {
  return {
    type: EpisodesActionTypes.SET_EPISODES,
    payload: episodes,
  };
}
