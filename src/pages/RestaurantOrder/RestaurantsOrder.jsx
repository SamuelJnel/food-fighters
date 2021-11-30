import React, { useEffect, useState } from "react";
//import React, { Component } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getRestaurants } from "../../services/restaurants";
import { createOrder } from "../../services/restaurants";
//import Map from "../../components/Map/Map";
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

  const currentRestaurant = restaurants.find((el) => el._id === id);
  //console.log(currentRestaurant);

  let bagNumber;
  if (currentRestaurant) {
    bagNumber = currentRestaurant.NumOfBags;
  }

  // console.log(bagNumber);

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
    // const updateBag = bagNumber - formData.quantity;
    // console.log(updateBag);
    // const newRest = { ...currentRestaurant };
    // newRest.NumOfBags = updateBag;
    // console.log(newRest);

    history.push("/order"); //redirects

    // setRestaurants(newRest);
    // getRestaurants();
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

// export class RestaurantsOrder extends Component {
//   constructor(props) {
//     super(props);
//   }

//   state = {
//     NumOfBags,
//     quantity,
//   };

//   async componentDidMount() {
//     const id = this.props.match.params.id;

//     const restaurants = await getRestaurants();
//     const currentRestaurant = restaurants.find((el) => el._id === id);
//     const updateBag =
//       currentRestaurant.NumOfBags -
//       this.setState({
//         person: personObject,
//         books: currentStudent.books || [],
//         movies: currentStudent.movies || [],
//       });
//   }

//   handleQuantityChange = (event) => {
//     this.setState(event.target.value);
//   };

//   handleFormSubmit = async (event) => {
//     //stops page from reloading when btn is clicked
//     event.preventDefault();
//     const formData = {
//       quantity,
//       restaurantId: id,
//     };
//     await createOrder(formData);
//     const updateBag = bagNumber - formData.quantity;
//     console.log(updateBag);
//     const newRest = { ...currentRestaurant };
//     newRest.NumOfBags = updateBag;
//     console.log(newRest);
//     setRestaurants(newRest);

//     history.push("/order"); //redirects
//   };

//   render() {
//     return (
//       <div>
//         <div className="form-container">
//           <form>
//             <label>Quantity</label>
//             <div className="">
//               <div className="select">
//                 <select value={quantity} onChange={handleQuantityChange}>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                 </select>
//               </div>
//             </div>
//             <div className="control">
//               <button className="btn btn-primary" onClick={handleFormSubmit}>
//                 Submit
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default RestaurantsOrder;
