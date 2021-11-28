import { death } from "library/common/components/Death/death";

export enum DeathsActionTypes {
  SET_DEATHS = "SET_DEATHS",
  SET_RANDOM_DEATH = "SET_RANDOM_DEATH",
}

export function setDeaths(deaths: death[]) {
  return {
    type: DeathsActionTypes.SET_DEATHS,
    payload: deaths,
  };
}

export function setRandomDeath(death: death) {
  return {
    type: DeathsActionTypes.SET_RANDOM_DEATH,
    payload: death,
  };
}
