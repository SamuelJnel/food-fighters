import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import { getRestaurants, updateRest } from "../../services/restaurants";
import { createOrder } from "../../services/restaurants";

// import axios from "axios";

import "./RestaurantsOrder.css";

const RestaurantOrder = (props) => {
  let { id } = useParams();
  let history = useHistory();

  const [restaurants, setRestaurants] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [newNumOfBags, setNewNumOfBags] = useState(0);

  useEffect(() => {
    async function fetchRestaurants() {
      const data = await getRestaurants();

      setRestaurants(data);
    }

    fetchRestaurants();
  }, []);

  // let bagNumber;
  // if (currentRestaurant) {
  //   bagNumber = currentRestaurant.NumOfBags;
  // }

  // console.log(bagNumber);
  const currentRestaurant = restaurants.find((el) => el._id === id);

  const handleQuantityChange = async (event) => {
    setQuantity(event.target.value);

    currentRestaurant.NumOfBags = event.target.value;
    setNewNumOfBags(event.target.value);
    setRestaurants((currentRestaurant) => [...currentRestaurant]);
    console.log(currentRestaurant._id);
    console.log(restaurants);
    return currentRestaurant;
  };

  const handleFormSubmit = async (event) => {
    //stops page from reloading when btn is clicked
    event.preventDefault();
    const formData = {
      quantity,
      restaurantId: id,
      userId: props.user._id,
    };
    //updateRest(id, { NumOfBags: newNumOfBags });
    await createOrder(formData);

    history.push("/order"); //redirects
  };

  return (
    <div>
      <div className="form-container">
        {/* <div>
          <form onSubmit={handleBagChange}>
            <label>Available Bags: {bagNumber}</label>
            <input type="hidden" name="NumOfBags" value="" />
          </form>
        </div> */}

        <form>
          <label>Quantity</label>
          <div className="">
            <div className="select">
              <select value={quantity} onChange={handleQuantityChange}>
                <option value="Select">Select Number of bags</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button className="btn btn-primary" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* {currentRestaurant.map((el, idx) => (
        <div key={idx}>
          <p>{el.name}</p>
          <p>Address: {el.address}</p>
          <p>Price: ${el.price}</p>
          <p>Quantity: {el.NumOfBags}</p>
          <div>
            {" "}
            <Map lat={el.lat} lng={el.lon} />
          </div>
        </div>
      ))} */}
      <div></div>
    </div>
  );
};

export default RestaurantOrder;
