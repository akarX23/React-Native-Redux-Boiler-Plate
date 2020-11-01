// Main
import App from "./App";
import { registerRootComponent } from "expo";
import React from "react";

// Redux Imports
import { Provider } from "react-redux";
import reducers from "./src/reducers/index";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleware)(
  createStore
);

const AppWithRedux = () => (
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <App />
  </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWithRedux);
