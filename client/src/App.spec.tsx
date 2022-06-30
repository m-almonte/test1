import { describe, expect, it } from "vitest";
import { render, screen } from "./tests/utils";

import App from "./App";

describe("simple app tests", () => {
  it("renders app without crashing", () => {
    render(<App />);
    expect(screen.getByText(/Hi! 👋🏽/i)).toBeInTheDocument();
  });
});
