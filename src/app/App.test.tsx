import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { App } from "./App";

describe("App shell", () => {
  it("renders the redesigned top navigation shell and dark workspace canvas", () => {
    render(<App />);

    expect(screen.getByLabelText(/workspace product chrome/i)).toBeInTheDocument();
    expect(
      screen.getByRole("navigation", { name: /primary workspace views/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^home$/i })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(
      screen.getByRole("region", { name: /dark workspace canvas/i }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/mock only/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/no filesystem/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/bounded mock/i)).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /phase 0 mock boundaries/i }),
    ).not.toBeInTheDocument();
  });

  it("renders Home as the first screen of the workspace shell", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /workspace home/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/active workspace object/i)).toBeInTheDocument();
    expect(screen.getByText(/phase 0 web prototype/i)).toBeInTheDocument();
  });

  it("opens the foundation surface as a product workspace proof", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /foundation/i }));

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /orchard notes/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("list", { name: /orchard notes sections/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /orchard work canvas/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", { name: /context handoff/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("demo-workspace/orchard-notes")).toBeInTheDocument();
    expect(screen.getByText(/preview: strategy note/i)).toBeInTheDocument();
    expect(screen.getByText(/suggested prompt/i)).toBeInTheDocument();
    expect(screen.queryByText(/company profile\.png/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/reference foundation proof/i)).not.toBeInTheDocument();
    expect(screen.getAllByText(/mock only/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/no filesystem/i).length).toBeGreaterThan(0);
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
      screen.getByRole("heading", { level: 2, name: /agent context composer/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId("recent-activity-card")).toHaveLength(3);
    expect(screen.getAllByText(/safe for agent/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/review first/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/private: excluded/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/mock only/i).length).toBeGreaterThan(0);
  });

  it("shows the mock Agent Context composer and fallback copy state", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockRejectedValue(new DOMException("NotAllowedError"));

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<App />);

    expect(screen.getByText("demo-workspace/orchard-notes")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /selected files/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /excluded files/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /private files/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /review-first files/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 3, name: /suggested prompt/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/build the Agent Context composer/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /copy suggested prompt/i }));

    expect(writeText).toHaveBeenCalledWith(
      expect.stringContaining("Build the Agent Context composer"),
    );
    expect(
      await screen.findByText(/clipboard permission is unavailable/i),
    ).toBeInTheDocument();
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

    let previewPane = screen.getByTestId("preview-pane");
    expect(within(previewPane).getByText(/markdown preview/i)).toBeInTheDocument();
    expect(within(previewPane).getByText(/workspace layer wedge/i)).toBeInTheDocument();
    expect(
      within(previewPane).queryByText(/html mockup preview/i),
    ).not.toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /view desk layout mockup/i }),
    );
    previewPane = screen.getByTestId("preview-pane");
    expect(within(previewPane).getByText(/html mockup preview/i)).toBeInTheDocument();
    expect(within(previewPane).getByText(/static desk frame/i)).toBeInTheDocument();
    expect(
      within(previewPane).queryByText(/markdown preview/i),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /view concept card set/i }));
    previewPane = screen.getByTestId("preview-pane");
    expect(within(previewPane).getByText(/image card preview/i)).toBeInTheDocument();

    await user.click(
      screen.getByRole("button", { name: /view home component summary/i }),
    );
    previewPane = screen.getByTestId("preview-pane");
    expect(within(previewPane).getByText(/code summary preview/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /view raw export/i }));

    previewPane = screen.getByTestId("preview-pane");
    expect(within(previewPane).getByText(/unsupported preview/i)).toBeInTheDocument();
    expect(
      within(previewPane).getByText(/this artifact is tracked for meaning, but phase 0 does not preview this file type/i),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /archive/i }));

    expect(screen.getByText(/no artifacts in archive/i)).toBeInTheDocument();
  });

  it("opens Project Desk from Home and Explorer as a mock work surface with empty states", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /open project desk/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /project desk/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/fictional project workspace/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /project status/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /important docs/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /next tasks/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /recent and pinned work/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /context candidates/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /agent context composer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /quick actions/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByText(/mock only/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/conceptual action/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/no tasks yet/i)).toBeInTheDocument();
    expect(screen.getByText(/no pinned docs/i)).toBeInTheDocument();
    expect(screen.getByText(/no safe context/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /back to explorer/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /visual explorer/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /open project desk/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /project desk/i }),
    ).toBeInTheDocument();
  });
});
