import {
  workspaceExplorerModel,
  workspaceHomeModel,
  workspaceProjectDeskModel,
  type WorkspaceExplorerModel,
  type WorkspaceHomeModel,
  type WorkspaceProjectDeskModel,
} from "../data/mockWorkspace";

export function getWorkspaceHomeModel(): WorkspaceHomeModel {
  return workspaceHomeModel;
}

export function getWorkspaceExplorerModel(): WorkspaceExplorerModel {
  return workspaceExplorerModel;
}

export function getWorkspaceProjectDeskModel(): WorkspaceProjectDeskModel {
  return workspaceProjectDeskModel;
}
