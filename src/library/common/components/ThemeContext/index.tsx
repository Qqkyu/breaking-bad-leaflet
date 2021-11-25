import { createContext } from "react";

import { Theme } from "library/common/constants/theme";

const ThemeContext = createContext<[Theme, (theme: Theme) => void]>([
  Theme.dark,
  () => {},
]);

export default ThemeContext;
