import { episode } from "library/common/components/Main/Episode/episode";

type EpisodesState = {
  episodes: episode[];
};

type EpisodesAction = {
  type: string;
  payload: episode[];
};

type DispatchType = (args: EpisodesAction) => EpisodesAction;
