import { buildNotification } from "./notification-view.js";

export function notificationController(notificationDiv) {
  function showNotification(message, type = "error") {
    const notification = document.createElement("div");
    notification.classList.add("notification", type);

    notification.innerHTML = buildNotification(message, type);
    notificationDiv.appendChild(notification);

    setTimeout(() => {
      notification.remove(notification);
    }, 3000);
  }

  return { showNotification };
}
