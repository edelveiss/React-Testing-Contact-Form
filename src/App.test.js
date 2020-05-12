import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});
// test("renders App to see the container", () => {
//   const container = render(<App />);
//   console.log(container);
// });
