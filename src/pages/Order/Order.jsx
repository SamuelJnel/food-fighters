import React, { useEffect, useState } from "react";

import { deleteOrder, getOrders } from "../../services/orders";

const Order = (props) => {
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    const data = await getOrders();

    setOrders(data);
  }, []);

  return (
    <div>
      {orders.map((el, idx) => (
        <div key={idx} className="row">
          <div key={idx} className="sm-col-6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">Card Title</span>
                <p>Number of Bags: {el.quantity}</p>
                <p>Pick-up Date: {el.pickUpDate}</p>
                <p>Pick-up Date: </p>
              </div>
              <div className="card-action">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    props.handleDelete(el._id);
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
  );
};

export default Order;
