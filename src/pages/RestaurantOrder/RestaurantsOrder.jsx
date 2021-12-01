import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import OrderForm from "../../components/OrderForm/OrderForm";
import { getRestaurants } from "../../services/restaurants";

import "./RestaurantsOrder.css";

const RestaurantOrder = (props) => {
  let { id } = useParams();
  const user = props.user;

  const currentRestaurant = props.restaurants.find((el) => el._id === id);
  console.log(currentRestaurant, "current rest");
  console.log(props.restaurants, "restaurants");

  if (currentRestaurant.hasSupply === false) {
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
      <OrderForm id={id} user={user} />

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
};

export default RestaurantOrder;
