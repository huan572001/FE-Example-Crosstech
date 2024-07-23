import React from "react";
import ReactDOM from "react-dom/client";

import QueryClientProvider from "@/queries/index.tsx";
import { store } from "@/redux/store/store.ts";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./styles.css";
import IntlProvider from "./common/Intl.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider>
        <IntlProvider>
          <Router basename={""}>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Router>
        </IntlProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
);
