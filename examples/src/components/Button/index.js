import React from "react";

import * as colors from "../../../../src/colors";

const appearances = {
  default: colors.dark,
  success: colors.green,
  info: colors.blue,
  error: colors.red,
  warning: colors.yellow,
};

const Button = ({ appearance, ...props }) => (
  <button
    css={{
      backgroundColor: `${appearances[appearance]}`,
      color: "white",
      border: 0,
      borderRadius: 3,
      cursor: "pointer",
      lineHeight: "2rem",
      padding: "3px 16px",
      transition: "transform ease 0.3s",
      ":focus": {
        outline: 0,
      },
      ":active": {
        transform: "scale(0.95)",
        transition: "transform ease 0.3s",
      },
    }}
    {...props}
  />
);

export default Button;
