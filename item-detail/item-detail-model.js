function parseItem(itemData) {
  return {
    image: itemData.image || "http://localhost:8000//default-image.jpg",
    name: itemData.title,
    description: itemData.description,
    price: itemData.price.concat(" $"),
    type: itemData.type,
    userId: itemData.userId,
    id: itemData.id,
  };
}

function parseUser(userData) {
  return {
    id: userData.id,
  };
}

export async function getItemDetail(itemId) {
  const url = `http://localhost:8000/api/items/${itemId}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return parseItem(data);
  } catch (error) {
    throw new Error("Error fetching the item's details");
  }
}

export async function getUserId(token) {
  const url = "http://localhost:8000/auth/me/";

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return parseUser(data);
  } catch (error) {
    throw new Error("Error fetching the user's data");
  }
}

export async function deleteItem(itemId, token) {
  const url = `http://localhost:8000/api/items/${itemId}`;

  try {
    debugger
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error("Error deleting the item");
  }
}
