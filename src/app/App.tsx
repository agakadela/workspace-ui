import { useState } from "react";

import { Explorer } from "../features/explorer/Explorer";
import { Home } from "../features/home/Home";
import { ProjectDesk } from "../features/project-desk/ProjectDesk";
import {
  getWorkspaceExplorerModel,
  getWorkspaceHomeModel,
  getWorkspaceProjectDeskModel,
} from "../shared/platform/workspace";

type ActiveView = "home" | "explorer" | "projectDesk";

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>("home");
  const homeModel = getWorkspaceHomeModel();
  const explorerModel = getWorkspaceExplorerModel();
  const projectDeskModel = getWorkspaceProjectDeskModel();

  if (activeView === "explorer") {
    return (
      <Explorer
        model={explorerModel}
        onOpenHome={() => setActiveView("home")}
        onOpenProjectDesk={() => setActiveView("projectDesk")}
      />
    );
  }

  if (activeView === "projectDesk") {
    return (
      <ProjectDesk
        model={projectDeskModel}
        onOpenHome={() => setActiveView("home")}
        onOpenExplorer={() => setActiveView("explorer")}
      />
    );
  }

  return (
    <Home
      model={homeModel}
      onOpenExplorer={() => setActiveView("explorer")}
      onOpenProjectDesk={() => setActiveView("projectDesk")}
    />
  );
}
