export function buildItem(item) {
  return `
  <a class="item" href="item-detail.html?itemId=${item.id}">
    <img class="item-image" src="${item.image}" alt="item image not available">
    <ul class="item-info-group">
      <li class="item-name">${item.name}</li>
      <li class="item-price">${item.price}</li>
      <li class="item-type">${item.type}</li>
      <li class="item-description">${item.description}</li>
    </ul>
  </a>
  `;
}

export function buildEmptyItemsList() {
  return `
  <h2>There are no items to either sell or buy right now. You can start by login and adding your first one</h2>
  `;
}
