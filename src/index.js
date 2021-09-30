/* @jsx h */
import { h, render } from "preact";

import App from "./components/App.jsx";

// shadow portal root

const portalRoot = document.querySelector("#portal-root");
portalRoot.attachShadow({
  mode: "open",
});

// app shadow root

const appRoot = document.querySelector("#app-root");
appRoot.attachShadow({
  mode: "open",
});

render(<App />, appRoot.shadowRoot);

// hot module replacement
if (module.hot) {
  module.hot.accept("./components/App.jsx", () => {
    const NextApp = require("./components/App.jsx").default;
    render(<NextApp />, appRoot.shadowRoot);
  });
}
