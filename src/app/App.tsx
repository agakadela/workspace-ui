import { useState } from "react";

import { cockpit, type ViewId } from "./cockpitData";
import { ComposerTray, type CopyState } from "./ComposerTray";
import { ExplorerSurface } from "./ExplorerSurface";
import { HomeCockpit } from "./HomeCockpit";
import { ObjectHeader } from "./ObjectHeader";
import { ProjectDeskSurface } from "./ProjectDeskSurface";
import { QueuedSurface } from "./QueuedSurface";
import { SurfaceTabs } from "./SurfaceTabs";
import { TopBar } from "./TopBar";

export function App() {
  const [activeView, setActiveView] = useState<ViewId>("home");
  const [copyState, setCopyState] = useState<CopyState>("idle");

  async function copyPrompt() {
    try {
      if (typeof navigator.clipboard?.writeText !== "function") {
        throw new Error("Clipboard API unavailable");
      }

      await navigator.clipboard.writeText(cockpit.prompt);
      setCopyState("copied");
    } catch {
      setCopyState("fallback");
    }
  }

  return (
    <div className="min-h-screen bg-night-980 text-white">
      <TopBar activeView={activeView} onSelectView={setActiveView} />

      <main className="mx-auto max-w-[1440px] px-5 pb-6 pt-9 md:px-8 lg:px-12">
        <ObjectHeader activeView={activeView} onSelectView={setActiveView} />

        <section
          aria-label="Workspace cockpit canvas"
          className="mt-8 overflow-hidden rounded-stage border border-black/70 bg-night-960 shadow-stage"
        >
          <SurfaceTabs activeView={activeView} />

          {activeView === "home" ? (
            <HomeCockpit onSelectView={setActiveView} />
          ) : activeView === "explorer" ? (
            <ExplorerSurface onSelectView={setActiveView} />
          ) : activeView === "projectDesk" ? (
            <ProjectDeskSurface onSelectView={setActiveView} />
          ) : (
            <QueuedSurface view={activeView} onSelectView={setActiveView} />
          )}

          <ComposerTray copyState={copyState} onCopyPrompt={copyPrompt} />
        </section>
      </main>
    </div>
  );
}
