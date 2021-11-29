import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRestaurants } from "../../services/restaurants";
import { createOrder } from "../../services/restaurants";
import "./RestaurantsOrder.css";

const RestaurantOrder = () => {
  let { id } = useParams();
  let history = useHistory();

  const [restaurants, setRestaurants] = useState([]);
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    async function fetchRestaurants() {
      const data = await getRestaurants();

      setRestaurants(data);
    }

    fetchRestaurants();
  }, []);

  let currentRestaurant = restaurants.filter((el) => el._id === id);

  let bagNumber = currentRestaurant.map((el) => el.NumOfBags);
  console.log(bagNumber);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    //stops page from reloading when btn is clicked
    event.preventDefault();
    const formData = {
      quantity,
      restaurantId: id,
    };
    await createOrder(formData);
    const updateBag = bagNumber - formData.quantity;
    console.log(updateBag);
    setRestaurants({ NumOfBags: updateBag });

    history.push("/order"); //redirects
  };

  return (
    <div>
      <div className="form-container">
        <form>
          <label>Quantity</label>
          <div className="">
            <div className="select">
              <select value={quantity} onChange={handleQuantityChange}>
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
      <div></div>
      {currentRestaurant.map((el, idx) => (
        <div key={idx}>
          <p>{el.name}</p>
          <p>Address: {el.address}</p>
          <p>Price: ${el.price}</p>
          <p>Quantity: {el.NumOfBags}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantOrder;
