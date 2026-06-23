import {
  workspaceExplorerModel,
  workspaceHomeModel,
  type WorkspaceExplorerModel,
  type WorkspaceHomeModel,
} from "../data/mockWorkspace";

export function getWorkspaceHomeModel(): WorkspaceHomeModel {
  return workspaceHomeModel;
}

export function getWorkspaceExplorerModel(): WorkspaceExplorerModel {
  return workspaceExplorerModel;
}
