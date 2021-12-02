import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getRestaurants } from "../../services/restaurants";
import { updateRest } from "../../services/restaurants";

const UpdateForm = (props) => {
  let history = useHistory();
  let { id } = useParams();

  const [restaurants, setRestaurants] = useState([]);
  const [hasSupply, setHasSupply] = useState("");
  const [NumOfBags, setNumOfBags] = useState(0);

  useEffect(() => {
    async function fetchRestaurants() {
      const data = await getRestaurants();

      setRestaurants(data);
    }

    fetchRestaurants();
  }, []);

  const currentRestaurant = restaurants.find((el) => el._id === id);

  const handleSupplyChange = async (event) => {
    setHasSupply(event.target.value);
    console.log(hasSupply);
  };
  const handleBagChange = async (event) => {
    setNumOfBags(event.target.value);
    console.log(NumOfBags);
  };

  console.log(hasSupply);

  const handleFormSubmit = async (event) => {
    //stops page from reloading when btn is clicked
    event.preventDefault();
    const formData = {
      hasSupply: hasSupply,
      NumOfBags: NumOfBags,
    };

    await updateRest(formData, id);
    console.log(restaurants);
    history.push("/restaurants"); //redirects
  };

  return (
    <div>
      Update form
      <form>
        <label>Supply</label>
        <div>
          <div className="select">
            <select value={hasSupply} onChange={handleSupplyChange}>
              <option value="Select">Does your restaurant has supply?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <label>Number of Bags</label>
        <div>
          <div className="select">
            <select value={NumOfBags} onChange={handleBagChange}>
              <option value="Select">How many bags to offer?</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
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
  );
};

export default UpdateForm;