import { createAdvertController } from "./create-advert/create-advert-controller.js";
import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const createAdvertForm = document.querySelector(".create-advert-form");
  const loaderSpinner = document.querySelector(".loader-spinner");
  const notifications = document.querySelector(".notifications");

  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);
  const { showNotification } = notificationController(notifications);

  createAdvertForm.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  createAdvertForm.addEventListener("create-advert-notification", (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  createAdvertController(createAdvertForm);
});