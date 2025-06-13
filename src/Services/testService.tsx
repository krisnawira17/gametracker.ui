export default function test() {
  return fetch("http://localhost:3001/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    })
    .then((data) => data)
    .catch((error) => {
      console.error("Fetch error: ", error);
      throw error;
    });
}
