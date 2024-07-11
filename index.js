import { itemListController } from "./item-list/item-list-controller.js";
import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";
import { notificationController } from "./notification/notification-controller.js";
import { sessionHeaderController } from "./session-header/session-header-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".items-list");
  const loaderSpinner = document.querySelector(".loader-spinner");
  const notifications = document.querySelector(".notifications");
  const sessionHeader = document.querySelector(".session-header");

  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);
  const { showNotification } = notificationController(notifications);

  itemList.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  itemList.addEventListener("item-list-notification", (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  sessionHeaderController(sessionHeader);
  itemListController(itemList);
});
