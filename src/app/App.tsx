import { Home } from "../features/home/Home";
import { getWorkspaceHomeModel } from "../shared/platform/workspace";

export function App() {
  const homeModel = getWorkspaceHomeModel();

  return <Home model={homeModel} />;
}
