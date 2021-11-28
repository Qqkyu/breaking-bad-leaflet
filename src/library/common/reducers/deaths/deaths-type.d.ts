import { death } from "library/common/components/Death/death";

type DeathsState = {
  deaths: death[];
  randomDeath: death | undefined;
};

type DeathsAction = {
  type: string;
  payload: death[];
};

type RandomDeathAction = {
  type: string;
  payload: death;
};

type DeathsActions = DeathsAction | RandomDeathAction;

type DispatchType = ((args: DeathsAction) => DeathsAction) | ((args: RandomDeathAction) => RandomDeathAction);
