import { itemListController } from "./item-list/item-list-controller.js";
import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".items-list");
  const loaderSpinner = document.querySelector(".loader-spinner");
  const notification = document.querySelector(".notification");

  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);
  const { showNotification } = notificationController(notification);

  itemList.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  itemList.addEventListener("item-list-notification", (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  itemListController(itemList);
});
