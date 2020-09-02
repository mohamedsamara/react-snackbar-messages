import React, { useEffect, useRef } from "react";

import { css, jsx } from "@emotion/core";

import * as colors from "./colors";
import { CheckIcon, InfoIcon, AlertIcon, CloseIcon } from "./icons";

const appearances = {
  success: {
    icon: <CheckIcon color={colors.white} />,
    text: colors.white,
    bg: colors.green,
  },
  info: {
    icon: <InfoIcon color={colors.white} />,
    text: colors.white,
    bg: colors.blue,
  },
  error: {
    icon: <InfoIcon color={colors.white} />,
    text: colors.white,
    bg: colors.red,
  },
  warning: {
    icon: <AlertIcon color={colors.white} />,
    text: colors.white,
    bg: colors.yellow,
  },
};

const Snackbar = ({ children, type, autoDismiss, delay, remove }) => {
  const removeRef = useRef();
  removeRef.current = remove;

  useEffect(() => {
    let id;

    if (autoDismiss) {
      const duration = delay || 5000;
      id = setTimeout(() => removeRef.current(), duration);
    }

    return () => clearTimeout(id);
  }, []);

  const styles = {
    block: {},
  };

  const snackbarBlockStyles = `snackbar-block ${type}-snackbar`;

  const getIcon = () => (
    <div className="snackbar-icon">{appearances[type].icon}</div>
  );

  return (
    <div className={snackbarBlockStyles}>
      {type !== "default" && getIcon()}
      <div className="snackbar-content">{children}</div>
      <button className="snackbar-close" onClick={remove}>
        <CloseIcon />
      </button>
    </div>
  );
};

export default Snackbar;
