import { dispatchEvent } from "../utils/dispatch-event.js";
import { deleteItem, getItemDetail, getUserId } from "./item-detail-model.js";
import { buildItemDetail } from "./item-detail-view.js";

export async function itemDetailController(itemDetail) {
  const params = new URLSearchParams(window.location.search);
  const itemId = params.get("itemId");
  if (!itemId) {
    window.location.href = "index.html";
  }

  try {
    dispatchEvent("load-spinner-event", {}, itemDetail);
    const item = await getItemDetail(itemId);
    itemDetail.innerHTML = buildItemDetail(item);
    handleDeleteItemButton(itemDetail, item);
  } catch (error) {
    dispatchEvent("item-detail-notification", {
      message: error
    }, itemDetail);
  } finally {
    dispatchEvent("load-spinner-event", {}, itemDetail);
  }
}

async function handleDeleteItemButton(itemDetail, item) {
  const token = localStorage.getItem("token");
  const { id } = await getUserId(token);

  if (id === item.userId) {
    const deleteItemButton = itemDetail.querySelector(".delete-item");
    deleteItemButton.removeAttribute("disabled");
    deleteItemButton.addEventListener("click", (event) => {
      removeItem(item.id, token, itemDetail);
    });
  }
}

async function removeItem(itemId, token, itemDetail) {
  if (window.confirm("Are you sure you want to delete this advert?")) {
    try {
      await deleteItem(itemId, token);
      
      dispatchEvent("item-detail-notification", {
        message: "Deleted advert successfully", 
        type: "success"
      }, itemDetail);
      //Pasa lo mismo que en la pagina de signup. Al terminar la función, se recarga la página
      //por lo que tengo que hacer la redirección directamente en vez de con setTimeout
      window.location.href = "index.html";
    } catch (error) {
      dispatchEvent("item-detail-notification", {
        message: error
      }, itemDetail);
    }
  }
}
