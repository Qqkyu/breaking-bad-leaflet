import { Theme } from "library/common/constants/theme";

type ThemeState = {
  theme: Theme;
};

type ThemeAction = {
  type: string;
};

type DispatchType = (args: ThemeAction) => ThemeAction;
