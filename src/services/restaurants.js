export function getRestaurants() {
  return fetch("http://localhost:3001/api/restaurants", {
    mode: "cors",
  }).then((res) => res.json());
}

export function updateRest(id, restaurants) {
  //console.log(data);
  return fetch(`http://localhost:3001/api/restaurants/${id}/edit`, {
    method: "POST",

    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(id),
  }).then((res) => res.json);
}

export function createOrder(data) {
  return fetch("http://localhost:3001/api/restaurants/:id", {
    method: "PUT",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(data),
  }).then((res) => res.json);
}
