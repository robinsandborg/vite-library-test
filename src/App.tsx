import "../lib/styles/base.css";
import "../lib/styles/reset.css";

import { Button, Combobox } from "../lib/main";

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
        <Combobox
          id="foo"
          label="Combobox"
          options={[
            { value: "foo", label: "Foo" },
            {
              value: "bar",
              label: "Bar",
            },
            {
              value: "baz",
              label: "Baz",
            },
            {
              value: "qux",
              label: "Qux",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
