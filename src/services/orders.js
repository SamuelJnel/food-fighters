export function getOrders() {
  return fetch("http://localhost:3001/api/orders", {
    mode: "cors",
  }).then((res) => res.json());
}

export function deleteOrder(id) {
  return fetch(`http://localhost:3001/api/orders/${id}/delete`, {
    method: "DELETE",
    mode: "cors",
  }).then((res) => res.json);
}
