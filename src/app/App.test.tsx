import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import { App } from "./App";

describe("Task 8B cockpit foundation", () => {
  it("renders the new product chrome and workspace cockpit canvas", () => {
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
      screen.getByRole("region", { name: /workspace cockpit canvas/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/foundation proof/i)).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  it("keeps Home as the first-screen workspace cockpit", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /orchard notes workspace/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/local workspace layer/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /continue from home/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /workspace details/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("heading", { level: 2, name: /pinned source material/i })
        .length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole("heading", { level: 2, name: /agent context composer/i }),
    ).toBeInTheDocument();
  });

  it("attaches the redesigned context composer to Home with explicit boundaries", () => {
    render(<App />);

    const composer = screen.getByRole("region", {
      name: /agent context composer/i,
    });

    expect(within(composer).getByText(/home handoff/i)).toBeInTheDocument();
    expect(within(composer).getByText(/orchard notes workspace/i)).toBeInTheDocument();
    expect(within(composer).getByText(/active folder/i)).toBeInTheDocument();
    expect(within(composer).getByText(/^selected context$/i)).toBeInTheDocument();
    expect(within(composer).getByText(/^review first$/i)).toBeInTheDocument();
    expect(within(composer).getByText(/^private$/i)).toBeInTheDocument();
    expect(within(composer).getByText(/^excluded$/i)).toBeInTheDocument();
    expect(within(composer).getByText(/suggested prompt/i)).toBeInTheDocument();
    expect(within(composer).getByText(/no live agent execution/i)).toBeInTheDocument();
  });

  it("shows bounded activity, status, privacy, and mock-only signals", () => {
    render(<App />);

    expect(screen.getAllByTestId("recent-activity-card")).toHaveLength(3);
    expect(screen.getAllByText(/mock only/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/no filesystem/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/0 live io/i)).toBeInTheDocument();
    expect(screen.getAllByText(/safe for agent/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/review first/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/private: excluded/i).length).toBeGreaterThan(0);
  });

  it("opens Explorer as a dense artifact inspection surface", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /^explorer$/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /visual explorer/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /artifact map/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /source docs/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/workspace layer promise/i)).toBeInTheDocument();
    expect(screen.getAllByText(/docs\/SPEC\.md/i).length).toBeGreaterThan(0);

    await user.click(screen.getByRole("button", { name: /html mockups/i }));
    await user.click(screen.getByRole("button", { name: /home handoff mockup/i }));

    expect(
      screen.getByRole("img", { name: /static html mockup preview/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/no iframe, no script execution/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /visual cards/i }));
    await user.click(screen.getByRole("button", { name: /reference mood card/i }));

    expect(
      screen.getByRole("img", { name: /image card preview/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /dark cockpit material study/i,
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /code summary/i }));
    await user.click(screen.getByRole("button", { name: /cockpit app modules/i }));

    expect(screen.getByText(/code summary, not a source dump/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /source docs/i }));
    await user.click(
      screen.getByRole("button", { name: /archived pdf placeholder/i }),
    );

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /unsupported preview state/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/no pdf viewer added/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /empty archive/i }));

    expect(screen.getByText(/no safe artifacts in empty archive/i)).toBeInTheDocument();
    expect(screen.getByText(/no selected artifact/i)).toBeInTheDocument();
  });

  it("opens Project Desk as a focused project cockpit", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /^explorer$/i }));
    await user.click(screen.getByRole("button", { name: /open project desk/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /project desk/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /orchard launch kit/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: /source material/i }),
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
    expect(screen.getAllByText(/mock control/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/no backlog tasks/i)).toBeInTheDocument();
    expect(screen.getByText(/no extra pinned docs/i)).toBeInTheDocument();
    expect(screen.getByText(/no safe context here/i)).toBeInTheDocument();
    expect(screen.queryByText(/real git/i)).not.toBeInTheDocument();

    await user.click(
      screen.getAllByRole("button", { name: /review context tray/i })[0],
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /agent context composer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/controlled handoff/i).length).toBeGreaterThan(0);
  });

  it("opens Context as the full composer surface without live-agent behavior", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: /^project desk$/i }));

    expect(
      screen.getByRole("heading", { level: 1, name: /project desk/i }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /^context$/i }));

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /agent context composer/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByText(/selected handoff boundary/i)).toBeInTheDocument();
    expect(screen.getByText(/private boundary/i)).toBeInTheDocument();
    expect(screen.getByText(/excluded boundary/i)).toBeInTheDocument();
    expect(screen.getAllByText(/no live agent execution/i).length).toBeGreaterThan(0);
  });

  it("copies the mock prompt with an accessible fallback state", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockRejectedValue(new DOMException("NotAllowedError"));

    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });

    render(<App />);

    const composer = screen.getByRole("region", {
      name: /workspace cockpit canvas/i,
    });

    await user.click(
      within(composer).getByRole("button", { name: /copy suggested prompt/i }),
    );

    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("Task 11"));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("selected"));
    expect(writeText).toHaveBeenCalledWith(expect.stringContaining("private"));
    expect(
      await screen.findByText(/clipboard permission is unavailable/i),
    ).toBeInTheDocument();
  });
});
