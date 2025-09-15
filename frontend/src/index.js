import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { YMInitializer } from 'react-yandex-metrika';
import store from "./redux/store";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <YMInitializer 
      accounts={[104155657]}
      options={{
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true
      }}
      version="2"
    />
    <App />
  </Provider>
);