export function getOrders() {
  console.log(localStorage);
  let token = localStorage.getItem("token");
  return fetch("/api/orders", {
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: token,
    }),
    mode: "cors",
  }).then((res) => res.json());
}

export function deleteOrder(id) {
  return fetch(`/api/orders/${id}/delete`, {
    method: "DELETE",
  }).then((res) => res.json);
}
