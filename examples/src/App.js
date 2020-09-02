import React from "react";

import { useSnackbar } from "../../src";

const App = () => {
  const snackbar = useSnackbar();

  return (
    <div>
      <h4>Hello</h4>
      <button
        onClick={() =>
          snackbar.add("Hello Success Snackbar", {
            type: "success",
            autoDismiss: false,
          })
        }
      >
        Add Success Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Hello Info Snackbar", {
            type: "info",
            autoDismiss: false,
          })
        }
      >
        Add Info Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Hello Warning Snackbar", {
            type: "warning",
            autoDismiss: false,
          })
        }
      >
        Add Warning Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Hello Default Snackbar", {
            type: "default",
            autoDismiss: false,
          })
        }
      >
        Add Default Snackbar
      </button>
    </div>
  );
};

export default App;
