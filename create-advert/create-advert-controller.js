import { dispatchEvent } from "../utils/dispatch-event.js";
import { createItem, uploadItemImage } from "./create-advert-model.js";

export function createAdvertController(createAdvertForm) {
  if (!localStorage.getItem("token")) {
    dispatchEvent("create-advert-notification", {
      message: "You must login first to create an advert"
    }, createAdvertForm);
    setTimeout(() => {
      window.location.href = "index.html"
    }, 1000);
  }
  createAdvertForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitCreateAdvert(createAdvertForm);
  });
}

function submitCreateAdvert(createAdvertForm) {
  let error = false;

  if (!validatePrice(createAdvertForm)) {
    dispatchEvent("create-advert-notification", {
      message: "The price must be a number different to 0"
    }, createAdvertForm);
    error = true;
  }

  if (!error) {
    createItemAdvert(createAdvertForm);
  }
}

function validatePrice(createAdvertForm) {
  const price = parseFloat(createAdvertForm.querySelector("#price").value) || 0;
  
  return price !== 0;
}

async function createItemAdvert(createAdvertForm) {
  const title = createAdvertForm.querySelector("#title").value;
  const price = createAdvertForm.querySelector("#price").value;
  const type = createAdvertForm.querySelector("#type").value;
  const image = createAdvertForm.querySelector("#image").files[0];
  const description = createAdvertForm.querySelector("#description").value;

  const token = localStorage.getItem("token");
  
  try {
    let imagePath = undefined;
    dispatchEvent("load-spinner-event", {}, createAdvertForm);
    if (image) {
      imagePath = await uploadItemImage(image, token);
    }
    await createItem(title, price, type, imagePath, description, token);
    dispatchEvent("create-advert-notification", {
      message: "Created item's advert successfully",
      type: "success"
    }, createAdvertForm);
  } catch (error) {
    dispatchEvent("create-advert-notification", {
      message: error
    }, createAdvertForm);
  } finally {
    dispatchEvent("load-spinner-event", {}, createAdvertForm);
  }
}