import { useState } from "react";

import ThemeContext from "library/common/components/ThemeContext";
import { Theme } from "library/common/constants/theme";

import "./appStyles.scss";

const App = () => {
  const theme = useState(Theme.dark);
  return (
    <ThemeContext.Provider value={theme}>
      <h1>Breaking Bad Leaflet</h1>
    </ThemeContext.Provider>
  );
};

export default App;
