import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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
    expect(screen.getAllByText(/safe for agent/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/review first/i)).toBeInTheDocument();
    expect(screen.getByText(/private: excluded/i)).toBeInTheDocument();
    expect(screen.getByText(/mock only/i)).toBeInTheDocument();
  });

  it("opens Visual Explorer from Home and shows meaningful artifact previews", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /workspace home/i }),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /open visual explorer/i }),
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /visual explorer/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("artifact-card")).toHaveLength(5);

    expect(screen.getByText(/strategy note/i)).toBeInTheDocument();
    expect(screen.getAllByText(/role:/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/source of truth/i)).toBeInTheDocument();
    expect(screen.getByText(/updated today/i)).toBeInTheDocument();
    expect(screen.getAllByText(/preview:/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/^markdown$/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/safe for agent/i).length).toBeGreaterThan(0);

    expect(screen.getByText(/markdown preview/i)).toBeInTheDocument();
    expect(screen.getByText(/html mockup preview/i)).toBeInTheDocument();
    expect(screen.getByText(/image card preview/i)).toBeInTheDocument();
    expect(screen.getByText(/code summary preview/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /view raw export/i }));

    expect(screen.getByText(/unsupported preview/i)).toBeInTheDocument();
    expect(
      screen.getByText(/this artifact is tracked for meaning, but phase 0 does not preview this file type/i),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /archive/i }));

    expect(screen.getByText(/no artifacts in archive/i)).toBeInTheDocument();
  });
});
