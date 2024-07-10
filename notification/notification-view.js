export function buildNotification(message, type) {
  return `
  <p class="${type}">${message}</p>
  `;
}
