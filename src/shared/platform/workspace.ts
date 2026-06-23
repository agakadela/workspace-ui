import {
  workspaceAgentContextModel,
  workspaceExplorerModel,
  workspaceHomeModel,
  workspaceProjectDeskModel,
  type WorkspaceAgentContextModel,
  type WorkspaceExplorerModel,
  type WorkspaceHomeModel,
  type WorkspaceProjectDeskModel,
} from "../data/mockWorkspace";

export function getWorkspaceAgentContextModel(): WorkspaceAgentContextModel {
  return workspaceAgentContextModel;
}

export function getWorkspaceHomeModel(): WorkspaceHomeModel {
  return workspaceHomeModel;
}

export function getWorkspaceExplorerModel(): WorkspaceExplorerModel {
  return workspaceExplorerModel;
}

export function getWorkspaceProjectDeskModel(): WorkspaceProjectDeskModel {
  return workspaceProjectDeskModel;
}
