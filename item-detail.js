import { itemDetailController } from "./item-detail/item-detail-controller.js";
import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";
import { notificationController } from "./notification/notification-controller.js";
import { sessionHeaderController } from "./session-header/session-header-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemDetails = document.querySelector(".item-details") 
  const loaderSpinner = document.querySelector(".loader-spinner");
  const notifications = document.querySelector(".notifications");
  const sessionHeader = document.querySelector(".session-header");

  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);
  const { showNotification } = notificationController(notifications);

  itemDetails.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  itemDetails.addEventListener("item-detail-notification", (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  sessionHeaderController(sessionHeader);
  itemDetailController(itemDetails);
});