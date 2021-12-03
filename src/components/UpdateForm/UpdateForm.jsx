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

  const handleSupplyChange = async (event) => {
    setHasSupply(event.target.value);
  };
  const handleBagChange = async (event) => {
    setNumOfBags(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    //stops page from reloading when btn is clicked
    event.preventDefault();
    const formData = {
      hasSupply: hasSupply,
      NumOfBags: NumOfBags,
    };

    await updateRest(formData, id);

    await setRestaurants(formData);
    //console.log(restaurants);
    history.push("/restaurants"); //redirects
  };
  console.log(restaurants);

  return (
    <div>
      <form>
        <label>Supply</label>
        <div>
          <div className="select">
            <select value={hasSupply} onChange={handleSupplyChange}>
              <option value="Select">Does your restaurant have supply?</option>
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
          <button className="btn teal darken-3" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
