import { dispatchEvent } from "../utils/dispatch-event.js";
import { createUser } from "./signup-model.js";

export function signupController(signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitSignup(signupForm);
  });
}

function submitSignup(signupForm) {
  let error = false;

  if (!validateUsername(signupForm)) {
    dispatchEvent("signup-notification", {
      message: "The username is not in the correct format"
    }, signupForm);
    error = true;
  }

  if (!validatePasswords(signupForm)) {
    dispatchEvent("signup-notification", {
      message: "Passwords must be equal"
    }, signupForm);
    error = true;
  }

  if (!error) {
    signupUser(signupForm);
  }
}

function validateUsername(signupForm) {
  const username = signupForm.querySelector("#username");

  return typeof username.value === "string";
}

function validatePasswords(signupForm) {
  const password = signupForm.querySelector("#password");
  const confirmPassword = signupForm.querySelector("#confirm-password");

  return password.value === confirmPassword.value;
}

async function signupUser(signupForm) {
  const username = signupForm.querySelector("#username").value;
  const password = signupForm.querySelector("#password").value;

  try {
    dispatchEvent("load-spinner-event", {}, signupForm);
    await createUser(username, password);
    dispatchEvent("signup-notification", {
      message: "Signup successfully",
      type: "success"
    }, signupForm);
    
    window.location.href = "login.html";

  } catch (error) {
    dispatchEvent("signup-notification", {
      message: error
    }, signupForm);
  } finally {
    dispatchEvent("load-spinner-event", {}, signupForm);
  }
}