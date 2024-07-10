import { dispatchEvent } from "../utils/dispatch-event.js";
import { getItems } from "./item-list-model.js";
import { buildEmptyItemsList, buildItem } from "./item-list-view.js";

export async function itemListController(itemList) {
  try {
    dispatchEvent("load-spinner-event", {}, itemList);
    const items = await getItems();
    renderItems(items, itemList);
  } catch (error) {
    dispatchEvent("item-list-notification", {
      message: error
    }, itemList);
  } finally {
    dispatchEvent("load-spinner-event", {}, itemList);
  }
}

function renderItems(items, itemList) {
  if (items.length !== 0) {
    items.forEach((item) => {
      const newItemElement = document.createElement("article");
      newItemElement.innerHTML = buildItem(item);
      itemList.appendChild(newItemElement);
    });
  } else {
    itemList.innerHTML = buildEmptyItemsList();
  }
}
