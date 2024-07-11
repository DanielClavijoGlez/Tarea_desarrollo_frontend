export async function createUser(username, password) {
  const url = "http://localhost:8000/auth/register";

  const body = { username: username, password: password };

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (error) {
    throw error;
  }
}
