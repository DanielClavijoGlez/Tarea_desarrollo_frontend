import { buildLoggedSession, buildNotLoggedSession } from "./session-header-view.js";

export function sessionHeaderController(sessionHeader) {
  if (localStorage.getItem("token")) {
    sessionHeader.innerHTML = buildLoggedSession();
    const logoutButton = sessionHeader.querySelector("button.nav-link");
    logoutButton.addEventListener("click", () => {
      localStorage.removeItem("token");
      sessionHeader.innerHTML = buildNotLoggedSession();
      window.location.reload();
    });
  } else {
    sessionHeader.innerHTML = buildNotLoggedSession();
  }
}