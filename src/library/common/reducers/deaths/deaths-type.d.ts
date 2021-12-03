import { death } from "library/common/components/Main/Death/death";

type DeathsState = {
  deaths: death[];
};

type DeathsAction = {
  type: string;
  payload: death[];
};

type DispatchType = (args: DeathsAction) => DeathsAction;
