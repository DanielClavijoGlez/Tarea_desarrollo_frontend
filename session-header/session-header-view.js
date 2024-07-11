export function buildNotLoggedSession() {
  return `
  <ul class="nav-list">
    <li>
      <a class="nav-link" href="login.html">Login</a>
    </li>
    <li>
      <a class="nav-link" href="signup.html">Signup</a>
    </li>
  </ul>
  `;
}

export function buildLoggedSession() {
  return `
  <ul class="nav-list">
    <li>
      <a class="nav-link" href="create-advert.html">Create advert</a>
    </li>
    <li>
      <button class="nav-link">Close session</button>
    </li>
  </ul>
  `;
}
