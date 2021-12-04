export function getRestaurants() {
  return fetch("/api/restaurants", {
    mode: "cors",
  }).then((res) => res.json());
}

export function updateRest(data, id) {
  //console.log(data);
  return fetch(`api/restaurants/edit/${id}`, {
    method: "PUT",

    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  }).then((res) => res.json);
}

export function createOrder(data) {
  let token = localStorage.getItem("token");
  return fetch("/api/restaurants/:id", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: token,
    }),
    body: JSON.stringify(data),
  }).then((res) => res.json);
}
