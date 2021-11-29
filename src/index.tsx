import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "main/store/store";

import App from "modules/App";
import ApiContext from "library/common/contexts/ApiContext";
import { BreakingBadApi } from "main/api";

render(
  <StrictMode>
    <ApiContext.Provider value={new BreakingBadApi()}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApiContext.Provider>
  </StrictMode>,
  document.getElementById("root")
);
