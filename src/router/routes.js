const routes = {
  authorization: {
    path: "/",
    name: "Authorization",
    component: () => import("../views/Authorization")
  },

  workspaceHub: {
    path: "/workspace-hub",
    name: "Workspaces",
    component: () => import("../views/WorkspaceHub")
  }
}

export { routes }