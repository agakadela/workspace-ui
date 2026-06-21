import { render, screen } from "@testing-library/react";

import { App } from "./App";

describe("App shell", () => {
  it("renders Home as the first screen of the workspace shell", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /workspace home/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/continue with the active workspace/i)).toBeInTheDocument();
    expect(screen.getByText(/phase 0 web prototype/i)).toBeInTheDocument();
  });
});
