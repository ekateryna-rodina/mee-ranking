import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./scss/bootstrap.scss";
import "./scss/style.scss";
import store from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);
