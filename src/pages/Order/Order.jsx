import React, { useEffect, useState } from "react";
import "./Order.css";

import { deleteOrder, getOrders } from "../../services/orders";

const Order = (props) => {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    const data = await getOrders();
    setOrders(data);
    console.log(orders);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = (id) => {
    deleteOrder(id);

    fetchOrders();
  };

  console.log(orders);

  return (
    <div className="order-page">
      {orders && (
        <div className="item-container ">
          {orders.map((el, idx) => (
            <div key={idx} className="row ">
              <div className="col s12 m6">
                <div className="card teal lighten-5">
                  <div className="card-content black-text">
                    <span className="card-title">
                      Order for: {el.establishment}
                    </span>
                    <p> Number of Bags: {el.quantity}</p>
                    <p>Pick-up Date: {el.pickUpDate.slice(0, 10)}</p>
                    <p>Pick-up Time: {el.pickUpTime}</p>
                    <p>Conformation code: {el.conformationCode}</p>
                  </div>
                  <div className="card-action">
                    <button
                      className="btn teal darken-3"
                      onClick={() => {
                        handleDelete(el._id);
                      }}
                    >
                      Cancel Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Order;
