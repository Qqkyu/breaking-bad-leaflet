import { DeathsActions, DeathsState } from "library/common/reducers/deaths/deaths-type";
import { DeathsActionTypes } from "library/common/actions/DeathsActions";
import { death } from "library/common/components/Death/death";

const initialState: DeathsState = {
  deaths: [],
  randomDeath: undefined,
};

const deathsReducer = (state: DeathsState = initialState, action: DeathsActions): DeathsState => {
  switch (action.type) {
    case DeathsActionTypes.SET_DEATHS:
      const newDeaths = action.payload as death[];
      return {
        ...state,
        deaths: newDeaths,
      };
    case DeathsActionTypes.SET_RANDOM_DEATH:
      const newRandomDeath = action.payload as death;
      return {
        ...state,
        randomDeath: newRandomDeath,
      };
  }
  return state;
};

export default deathsReducer;
