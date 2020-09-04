import React, { useEffect, useRef } from "react";

import { keyframes } from "@emotion/core";

import * as colors from "./colors";
import { CheckIcon, InfoIcon, AlertIcon, CloseIcon } from "./icons";

const appearances = {
  default: {
    icon: null,
    text: colors.white,
    bg: colors.dark,
  },
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

export const fadeAnimations = keyframes`from { opacity: 0 } to { opacity: 1}`;

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

  const getIcon = () => (
    <div
      className="snackbar-icon"
      css={{
        display: "flex",
        padding: "12px 10px",
      }}
    >
      {appearances[type].icon}
    </div>
  );

  const positionStyles = {
    animation: `${fadeAnimations} ease 0.5s`,
    backgroundColor: appearances[type].bg,
    color: appearances[type].text,
    margin: 10,
    borderRadius: 5,
    boxShadow:
      "0px 3px 5px -1px #00000033, 0px 6px 10px 0px #00000024, 0px 1px 18px 0px #0000001f",
  };

  return (
    <div className={`snackbar-wrapper ${type}-snackbar`} css={positionStyles}>
      <div
        className="snackbar-block"
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minWidth: 400,
          maxWidth: 500,
        }}
      >
        {type !== "default" && getIcon()}
        <div
          className="snackbar-content"
          css={{
            flex: 1,
            fontSize: 14,
            fontFamily: "sans-serif",
            padding: type === "default" ? "12px 12px 12px 18px" : "12px 6px",
            lineHeight: 1.4,
            wordBreak: "break-word",
          }}
        >
          {children}
        </div>
        <button
          className="snackbar-close"
          onClick={remove}
          css={{
            flexShrink: 0,
            border: "none",
            backgroundColor: "transparent",
            color: "white",
            cursor: "pointer",
            fontSize: 0,
            padding: "12px 10px",
            transition: "transform ease 0.3s",
            ":focus": {
              outline: "none",
              transform: "scale(0.9)",
              transition: "transform ease 0.3s",
            },
          }}
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  );
};

export default Snackbar;
