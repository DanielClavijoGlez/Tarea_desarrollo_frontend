import { getItems } from "./item-list-model.js";
import { buildEmptyItemsList, buildItem } from "./item-list-view.js";

export async function itemListController(itemList) {
  try {
    const items = await getItems();
    renderItems(items, itemList);
  } catch (error) {
    alert(error);
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
