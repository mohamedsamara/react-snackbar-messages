import React from "react";

const SnackbarContainer = (props) => {
  const { placement } = props;

  const placements = {
    "top-left": { top: 0, left: 0 },
    "top-center": { top: 0, left: "50%", transform: "translateX(-50%)" },
    "top-right": { top: 0, right: 0 },
    "bottom-left": { bottom: 0, left: 0 },
    "bottom-center": { bottom: 0, left: "50%", transform: "translateX(-50%)" },
    "bottom-right": { bottom: 0, right: 0 },
  };

  const position = placements[placement];

  const positionStyles = {
    ...position,
    position: "fixed",
    maxHeight: "100%",
    overflow: "hidden auto",
  };

  return (
    <div
      className={`snackbar-container ${placement}`}
      css={positionStyles}
      {...props}
    />
  );
};

export default SnackbarContainer;
