import { episode } from "library/common/components/Episode/episode";
import { apiMainPath, apiPaths } from "library/common/constants/apiPaths";
import { Dispatch } from "redux";

export enum EpisodesActionTypes {
  SET_EPISODES = "SET_EPISODES",
}

export function setEpisodes(episodes: episode[]) {
  return {
    type: EpisodesActionTypes.SET_EPISODES,
    payload: episodes,
  };
}

export function fetchAndSetEpisodes() {
  const apiPath = apiMainPath + apiPaths.AllEpisodes;

  return async function (dispatch: Dispatch) {
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    dispatch(setEpisodes(jsonRes));
  };
}
