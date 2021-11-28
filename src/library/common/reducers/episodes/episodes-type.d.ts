import { episode } from "library/common/components/Episode/episode";

type EpisodesState = {
  episodes: episode[];
};

type EpisodesAction = {
  type: string;
  payload: episode[];
};

type DispatchType = (args: EpisodesAction) => EpisodesAction;
