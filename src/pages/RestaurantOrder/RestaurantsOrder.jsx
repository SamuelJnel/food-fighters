import React from "react";
import { useParams } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";

import "./RestaurantsOrder.css";

const RestaurantOrder = (props) => {
  let { id } = useParams();

  const user = props.user;

  const currentRestaurant = props.restaurants.find((el) => el._id === id);

  if (currentRestaurant.hasSupply === "false") {
    return (
      <div className="rest-order">
        <div className="rest-order-none">
          <h3> We have no surplus today.</h3>
        </div>
        {!props.currentRestaurant && (
          <div className="rest-details">
            <div className="back-color">
              <p>{currentRestaurant.name}</p>
              <p>Address: {currentRestaurant.address}</p>
              <p>Price: ${currentRestaurant.price}</p>
              <p>Quantity: {currentRestaurant.NumOfBags}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="rest-order">
      <div className="order-form-container">
        <OrderForm id={id} user={user} />
      </div>
      {!props.currentRestaurant && (
        <div className="rest-details">
          <div className="back-color">
            <h3>{currentRestaurant.name}</h3>
            <p>Address: {currentRestaurant.address}</p>
            <p>Price: ${currentRestaurant.price}</p>
            <p>Quantity: {currentRestaurant.NumOfBags}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantOrder;
