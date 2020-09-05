import React from "react";
import { render } from "react-dom";

import { Global, css } from "@emotion/core";

import App from "./App";

render(
  <>
    <Global
      styles={{
        body: {
          margin: 0,
          padding: 0,
          lineHeight: 1.4,
        },
      }}
    />
    <App />
  </>,
  document.getElementById("root")
);
