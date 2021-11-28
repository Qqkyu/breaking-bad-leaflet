import { death } from "library/common/components/Death/death";

type DeathsState = {
  deaths: death[];
};

type DeathsAction = {
  type: string;
  payload: death[];
};

type DispatchType = (args: DeathsAction) => DeathsAction;
