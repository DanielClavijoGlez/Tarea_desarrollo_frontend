import { itemListController } from "./item-list/item-list-controller.js";
import { loaderSpinnerController } from "./load-spinner/load-spinner-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".items-list");
  const loaderSpinner = document.querySelector(".loader-spinner");
  const { toggleLoaderSpinner } = loaderSpinnerController(loaderSpinner);

  itemList.addEventListener("load-spinner-event", () => {
    toggleLoaderSpinner();
  });

  itemListController(itemList);
});
