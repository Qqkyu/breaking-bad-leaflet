import { StrictMode } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "main/store/store";

import App from "modules/App";

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
