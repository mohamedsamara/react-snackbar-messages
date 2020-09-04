import React, { useState } from "react";
import { createPortal } from "react-dom";

import SnackbarContext from "./context";
import SnackbarContainer from "./SnackbarContainer";
import Snackbar from "./Snackbar";

let snackbarCounter = 0;

const SnackbarProvider = (props) => {
  const [snackbars, setSnackbars] = useState([]);
  const { children, placement = "bottom-center" } = props;

  const add = (
    content,
    { type = "default", autoDismiss = true, delay = 5000 }
  ) => {
    const id = snackbarCounter++;
    const snackbar = { id, content, type, autoDismiss, delay };

    setSnackbars([...snackbars, snackbar]);
  };

  const remove = (id) => {
    setSnackbars(snackbars.filter((s) => s.id !== id));
  };

  return (
    <SnackbarContext.Provider value={{ add, remove }}>
      {children}

      {createPortal(
        <SnackbarContainer placement={placement}>
          {snackbars.map(
            ({ id, content, type, placement, autoDismiss, delay }) => (
              <Snackbar
                key={id}
                type={type}
                placement={placement}
                autoDismiss={autoDismiss}
                delay={delay}
                remove={() => remove(id)}
              >
                {content}
              </Snackbar>
            )
          )}
        </SnackbarContainer>,

        document.body
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
