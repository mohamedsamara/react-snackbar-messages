import React from "react";
import { render } from "react-dom";

import { SnackbarProvider } from "../../src";
import App from "./App";

render(
  <SnackbarProvider placement="bottom-center">
    <App />
  </SnackbarProvider>,
  document.getElementById("root")
);
