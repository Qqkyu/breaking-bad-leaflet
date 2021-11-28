import { death } from "library/common/components/Death/death";
import { apiMainPath, apiPaths } from "library/common/constants/apiPaths";
import { Dispatch } from "redux";

export enum DeathsActionTypes {
  SET_DEATHS = "SET_DEATHS",
}

export function setDeaths(deaths: death[]) {
  return {
    type: DeathsActionTypes.SET_DEATHS,
    payload: deaths,
  };
}

export function fetchAndSetDeaths() {
  const apiPath = apiMainPath + apiPaths.AllDeaths;

  return async function (dispatch: Dispatch) {
    const res = await fetch(apiPath);
    const jsonRes = await res.json();
    dispatch(setDeaths(jsonRes));
  };
}
