import React from "react";
import { Button } from "../lib/components/Button/Button";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "2rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gap: "1rem",
        }}
      >
        <Button type="button">Primary</Button>
        <Button type="button" variant="secondary">
          Secondary
        </Button>
      </div>
    </div>
  );
}

export default App;
