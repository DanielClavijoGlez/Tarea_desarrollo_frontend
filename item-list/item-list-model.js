function parseItems(data) {
  return data.map(data => ({
    image: data.image || "http://localhost:8000//default-image.jpg",
    name: data.name,
    description: data.description,
    price: data.price.concat(" $"),
    type: data.type,
    id: data.id
  }))
}

export async function getItems() {
  const url = "http://localhost:8000/api/items";
  let items = [];

  try {
    const response = await fetch(url);
    const data = await response.json();
    items = parseItems(data);
  } catch (error) {
    throw new Error("Error fetching the item's list");
  }
  
  return items;
}
