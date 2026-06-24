import { useState } from "react";
import {
  Compass,
  Home as HomeIcon,
  LayoutDashboard,
  PanelRightOpen,
} from "lucide-react";

import { Explorer } from "../features/explorer/Explorer";
import { FoundationProof } from "../features/foundation-proof/FoundationProof";
import { Home } from "../features/home/Home";
import { ProjectDesk } from "../features/project-desk/ProjectDesk";
import {
  getWorkspaceAgentContextModel,
  getWorkspaceExplorerModel,
  getWorkspaceHomeModel,
  getWorkspaceProjectDeskModel,
} from "../shared/platform/workspace";
import { AppShell } from "../shared/ui/AppShell";

type ActiveView = "home" | "explorer" | "projectDesk" | "foundationProof";

export function App() {
  const [activeView, setActiveView] = useState<ActiveView>("home");
  const homeModel = getWorkspaceHomeModel();
  const explorerModel = getWorkspaceExplorerModel();
  const projectDeskModel = getWorkspaceProjectDeskModel();
  const agentContextModel = getWorkspaceAgentContextModel();

  const navItems = [
    {
      id: "home",
      label: "Home",
      icon: HomeIcon,
      isActive: activeView === "home",
      onSelect: () => setActiveView("home"),
    },
    {
      id: "explorer",
      label: "Visual Explorer",
      icon: Compass,
      isActive: activeView === "explorer",
      onSelect: () => setActiveView("explorer"),
    },
    {
      id: "projectDesk",
      label: "Project Desk",
      icon: PanelRightOpen,
      isActive: activeView === "projectDesk",
      onSelect: () => setActiveView("projectDesk"),
    },
    {
      id: "foundationProof",
      label: "Foundation",
      icon: LayoutDashboard,
      isActive: activeView === "foundationProof",
      onSelect: () => setActiveView("foundationProof"),
    },
  ];

  if (activeView === "explorer") {
    return (
      <AppShell navItems={navItems}>
        <Explorer
          model={explorerModel}
          onOpenHome={() => setActiveView("home")}
          onOpenProjectDesk={() => setActiveView("projectDesk")}
        />
      </AppShell>
    );
  }

  if (activeView === "projectDesk") {
    return (
      <AppShell navItems={navItems}>
        <ProjectDesk
          model={projectDeskModel}
          agentContext={agentContextModel}
          onOpenHome={() => setActiveView("home")}
          onOpenExplorer={() => setActiveView("explorer")}
        />
      </AppShell>
    );
  }

  if (activeView === "foundationProof") {
    return (
      <AppShell navItems={navItems}>
        <FoundationProof />
      </AppShell>
    );
  }

  return (
    <AppShell navItems={navItems}>
      <Home
        model={homeModel}
        agentContext={agentContextModel}
        onOpenExplorer={() => setActiveView("explorer")}
        onOpenProjectDesk={() => setActiveView("projectDesk")}
      />
    </AppShell>
  );
}
