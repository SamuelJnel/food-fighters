import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateForm from "../../components/UpdateForm/UpdateForm";
import { getRestaurants } from "../../services/restaurants";

const Edit = () => {
  let { id } = useParams();

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function fetchRestaurants() {
      const data = await getRestaurants();

      setRestaurants(data);
    }

    fetchRestaurants();
  }, []);

  const currentRestaurant = restaurants.find((el) => el._id === id);

  console.log(restaurants);
  console.log(currentRestaurant);
  return (
    <div>
      <UpdateForm />
    </div>
  );
};

export default Edit;
