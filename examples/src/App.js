import React from "react";

import { useSnackbar } from "../../src";

const App = () => {
  const snackbar = useSnackbar();

  return (
    <div>
      <h4>Examples</h4>
      <button
        onClick={() =>
          snackbar.add("Success Snackbar", {
            type: "success",
            autoDismiss: true,
          })
        }
      >
        Add Success Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Info Snackbar", {
            type: "info",
            autoDismiss: true,
          })
        }
      >
        Add Info Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Warning Snackbar", {
            type: "warning",
            autoDismiss: true,
          })
        }
      >
        Add Warning Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Error Snackbar", {
            type: "error",
            autoDismiss: false,
          })
        }
      >
        Add Error Snackbar
      </button>
      <button
        onClick={() =>
          snackbar.add("Default Snackbar", {
            type: "default",
            autoDismiss: true,
          })
        }
      >
        Add Default Snackbar
      </button>
    </div>
  );
};

export default App;
