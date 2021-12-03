import { DeathsAction, DeathsState } from "library/common/reducers/deaths/deaths-type";
import { DeathsActionTypes } from "library/common/actions/DeathsActions";
import { death } from "library/common/components/Main/Death/death";

const initialState: DeathsState = {
  deaths: [],
};

const deathsReducer = (state: DeathsState = initialState, action: DeathsAction): DeathsState => {
  switch (action.type) {
    case DeathsActionTypes.SET_DEATHS:
      const newDeaths = action.payload as death[];
      return {
        ...state,
        deaths: newDeaths,
      };
  }
  return state;
};

export default deathsReducer;
