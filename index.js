import { itemListController } from "./item-list/item-list-controller.js";

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.querySelector(".items-list");
  itemListController(itemList);
});
