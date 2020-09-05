import React, { useState } from "react";

import { SnackbarProvider } from "../../src";

import Demo from "./components/Demo";

const placements = [
  { label: "Top Left", value: "top-left" },
  { label: "Top Center", value: "top-center" },
  { label: "Top Right", value: "top-right" },
  { label: "Bottom Left", value: "bottom-left" },
  { label: "Bottom Center", value: "bottom-center" },
  { label: "Bottom Right", value: "bottom-right" },
];

const App = () => {
  const [placement, setPlacement] = useState(placements[4].value);

  const placementChange = (value) => {
    setPlacement(value);
  };

  return (
    <div
      className="app"
      css={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f1f2f5",
        padding: 25,
      }}
    >
      <SnackbarProvider placement={placement}>
        <Demo
          placements={placements}
          placement={placement}
          placementChange={placementChange}
        />
      </SnackbarProvider>
    </div>
  );
};

export default App;
