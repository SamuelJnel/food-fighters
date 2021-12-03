import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getRestaurants } from "../../services/restaurants";
import { createOrder } from "../../services/restaurants";

const OrderForm = (props) => {
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

  const currentRestaurant = restaurants.find((el) => el._id === id);

  const handleQuantityChange = async (event) => {
    setQuantity(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    //stops page from reloading when btn is clicked
    event.preventDefault();
    const formData = {
      quantity,
      pickUpTime: currentRestaurant.pickUpTime,
      restaurantId: props.id,
      userId: props.user._id,
    };

    await createOrder(formData);

    history.push("/order"); //redirects
  };

  return (
    <div>
      <div className="form-container">
        <form>
          <label>Quantity</label>
          <div>
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
    </div>
  );
};

export default OrderForm;
