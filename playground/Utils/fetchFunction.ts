import fetch from "node-fetch";

/**
 * Uses fetch to make an http request
 *
 * @param url URL to make an API call
 * @param token Token to use an auth bearer
 * @returns
 */
export default async function fetchFunction<T>(
  url: string,
  token: string
): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error(response);
    }
    return response.json() as Promise<T>;
  } catch (err) {
    console.error(err);
    throw new Error("Error with API call");
  }
}
