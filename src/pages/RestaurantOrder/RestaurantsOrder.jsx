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
      <div>
        <h3> We have no supply today.</h3>
        {!props.currentRestaurant && (
          <div>
            <p>{currentRestaurant.name}</p>
            <p>Address: {currentRestaurant.address}</p>
            <p>Price: ${currentRestaurant.price}</p>
            <p>Quantity: {currentRestaurant.NumOfBags}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="order-form-container">
        <OrderForm id={id} user={user} />
      </div>
      {!props.currentRestaurant && (
        <div className="restaurant-container">
          <p>{currentRestaurant.name}</p>
          <p>Address: {currentRestaurant.address}</p>
          <p>Price: ${currentRestaurant.price}</p>
          <p>Quantity: {currentRestaurant.NumOfBags}</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantOrder;
