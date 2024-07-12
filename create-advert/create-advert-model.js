export async function createItem(title, price, type, image, description, token) {
  const url = "http://localhost:8000/api/items";

  const body = {
    title: title,
    price: price,
    type: type,
    image: image,
    description: description,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Error creating the item advert");
  }
}

export async function uploadItemImage(image, token) {
  const url = "http://localhost:8000/upload";

  const bodyFormData = new FormData();
  bodyFormData.append("file", image);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: bodyFormData,
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    });
    const data = await response.json();
    return data.path;
  } catch (error) {
    throw new Error("Error uploading the item image");
  }
}
