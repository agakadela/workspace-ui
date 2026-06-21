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

  it("orients the builder with recent activity, next work, pinned docs, and agent context", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 2, name: /continue/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /recent activity/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /next up/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /pinned docs/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /agent context draft/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId("recent-activity-card")).toHaveLength(3);
    expect(screen.getByText(/safe for agent/i)).toBeInTheDocument();
    expect(screen.getByText(/review first/i)).toBeInTheDocument();
    expect(screen.getByText(/private: excluded/i)).toBeInTheDocument();
    expect(screen.getByText(/mock only/i)).toBeInTheDocument();
  });
});
