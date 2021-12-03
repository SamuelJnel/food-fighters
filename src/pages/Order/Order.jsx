import React, { useEffect, useState } from "react";
import "./Order.css";

import { deleteOrder, getOrders } from "../../services/orders";

const Order = (props) => {
  const [orders, setOrders] = useState([]);

  const user = props.user;

  async function fetchOrders() {
    const data = await getOrders();
    setOrders(data);
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    deleteOrder(id);
    // console.log(id);
    const items = await getOrders();
    //console.log(items);
    setOrders(items);
  };

  console.log(orders);

  const currentUserOrders = orders.length
    ? orders.map((el) => el.userId === user._id)
    : [];

  return (
    <div>
      {orders && (
        <div className="item-container ">
          {currentUserOrders.map((el, idx) => (
            <div key={idx} className="row ">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">
                      Order for: {el.establishment}
                    </span>
                    <p> Number of Bags: {el.quantity}</p>
                    <p>Pick-up Date: {el.pickUpDate /*.slice(0, 10)*/}</p>
                    <p>Pick-up Date: {el.pickUpTime}</p>
                    <p>Conformation code: {el.conformationCode}</p>
                  </div>
                  <div className="card-action">
                    <button
                      className="btn teal darken-3"
                      onClick={(_id) => {
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
