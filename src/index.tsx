import { StrictMode } from "react";
import { render } from "react-dom";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "modules/App";
import { DispatchType, ThemeAction, ThemeState } from "library/common/reducers/type";
import reducer from "library/common/reducers/ThemeReducer";

const store: Store<ThemeState, ThemeAction> & {
  dispatch: DispatchType;
} = createStore(reducer, composeWithDevTools());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
