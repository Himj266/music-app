export const fetcher = (
  url: string,
  data?: { email: string; password: string }
) => {
  console.log("himj", { path: `${window.location.origin}/api${url}` });
  return fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include", //When a request's credentials mode (Request.credentials) is include, browsers will only expose the response to the frontend JavaScript code if the Access-Control-Allow-Credentials value is true.
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log("himj", { err });
    });
};
