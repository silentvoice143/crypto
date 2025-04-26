import React from "react";
import CryptoTable from "./home/CryptoTable";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store";

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="">
            <CryptoTable />
          </div>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );
}

export default App;
