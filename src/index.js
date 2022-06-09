import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./Store/configureStore";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore();
console.log(store, "store");
store.subscribe(() => {
  // console.log('updated store value',store.getState())
});
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
