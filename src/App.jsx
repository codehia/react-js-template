import React from "react";
import { createRoot } from "react-dom";

const App = () => {
  <div>React App</div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
