import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "components/App";
import { persistor } from "redux/store/store";
import { store } from "redux/store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook-/">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
