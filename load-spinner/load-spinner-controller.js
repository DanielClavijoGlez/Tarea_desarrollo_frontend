import { buildLoaderSpinner } from "./load-spinner-view.js";

export function loaderSpinnerController(loaderSpinner) {
  let active = false;

  function toggleLoaderSpinner() {
    if (!active) {
      loaderSpinner.innerHTML = buildLoaderSpinner();
      active = true;
    } else {
      loaderSpinner.innerHTML = "";
      active = false;
    }
  }

  return { toggleLoaderSpinner };
}
