import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";
import { notificationController } from "./notification/notification-controller.js";
import { signupController } from "./signup/signup-controller.js";


document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.querySelector(".signup-form");
  const loaderSpinner = document.querySelector(".loader-spinner");
  const notifications = document.querySelector(".notifications");

  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);
  const { showNotification } = notificationController(notifications);

  signupForm.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  signupForm.addEventListener("signup-notification", (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  signupController(signupForm);
});