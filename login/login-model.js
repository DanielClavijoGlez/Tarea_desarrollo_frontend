export async function loginUser(username, password) {
  const url = "http://localhost:8000/auth/login";
  const body = {
    username: username,
    password: password,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json"
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }
    return data.accessToken;

  } catch (error) {
    throw error;
  }
}
