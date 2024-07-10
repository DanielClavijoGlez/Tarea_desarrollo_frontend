import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";
import { loginController } from "./login/login-controller.js";
import { notificationController } from "./notification/notification-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form");
  const loaderSpinner = document.querySelector(".loader-spinner");
  const notification = document.querySelector(".notification");

  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);
  const { showNotification } = notificationController(notification);

  loginForm.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  loginForm.addEventListener("login-notification", (event) => {
    showNotification(event.detail.message, event.detail.type);
  });

  loginController(loginForm);
});