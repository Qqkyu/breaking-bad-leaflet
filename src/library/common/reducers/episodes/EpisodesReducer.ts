import { EpisodesAction, EpisodesState } from "library/common/reducers/episodes/episodes-type";
import { EpisodesActionTypes } from "library/common/actions/EpisodesActions";

const initialState: EpisodesState = {
  episodes: [],
};

const episodesReducer = (state: EpisodesState = initialState, action: EpisodesAction): EpisodesState => {
  switch (action.type) {
    case EpisodesActionTypes.SET_EPISODES:
      const newEpisodes = action.payload;
      return {
        ...state,
        episodes: newEpisodes,
      };
  }
  return state;
};

export default episodesReducer;
