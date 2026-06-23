import { useState } from "react";

import { Explorer } from "../features/explorer/Explorer";
import { Home } from "../features/home/Home";
import {
  getWorkspaceExplorerModel,
  getWorkspaceHomeModel,
} from "../shared/platform/workspace";

type ActiveView = "home" | "explorer";

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>("home");
  const homeModel = getWorkspaceHomeModel();
  const explorerModel = getWorkspaceExplorerModel();

  if (activeView === "explorer") {
    return (
      <Explorer model={explorerModel} onOpenHome={() => setActiveView("home")} />
    );
  }

  return (
    <Home
      model={homeModel}
      onOpenExplorer={() => setActiveView("explorer")}
    />
  );
}
