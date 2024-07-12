export function buildItemDetail(item) {
  return `
  <img class="item-image" src="${item.image}" alt="item image not available">
    <ul class="item-info-group">
      <li class="item-name">${item.name}</li>
      <li class="item-price">${item.price}</li>
      <li class="item-type">${item.type}</li>
      <li class="item-description">${item.description}</li>
    </ul>
    <button class="delete-item" disabled>Delete advert</button>
  `;
}
