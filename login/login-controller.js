import { dispatchEvent } from "../utils/dispatch-event.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitLogin(loginForm);
  });
}

async function submitLogin(loginForm) {
  const { username, password } = getLoginData(loginForm);

  try {
    dispatchEvent("load-spinner-event", {}, loginForm);
    const jwt = await loginUser(username, password);
    dispatchEvent("login-notification", {
      message: "Login successfully",
      type: "success"
    }, loginForm);
    localStorage.setItem("token", jwt);
    setTimeout(() => {
      window.location = "./index.html"
    }, 2000);
  } catch (error) {
    dispatchEvent("login-notification", {
      message: error
    }, loginForm);
  } finally {
    dispatchEvent("load-spinner-event", {}, loginForm);
  }
}

function getLoginData(loginForm) {
  const data = {};

  data.username = loginForm.querySelector("#username").value;
  data.password = loginForm.querySelector("#password").value;

  return data;
}
