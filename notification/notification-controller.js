import { buildNotification } from "./notification-view.js";

export function notificationController(notificationDiv) {
  function showNotification(message, type = "error") {
    notificationDiv.innerHTML = buildNotification(message, type);
    setTimeout(() => {
      notificationDiv.innerHTML = "";
    }, 3000);
  }

  return { showNotification };
}
