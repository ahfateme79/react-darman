import { Baseurl } from "./baseurl";

const Api = (url: string, methode: string, body: Object | null) => {
  return fetch(`${Baseurl}/${url}`, {
    method: methode,
    body: body ? JSON.stringify(body) : null,
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
  });
};
export default Api;
