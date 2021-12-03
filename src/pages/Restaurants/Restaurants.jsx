import React from "react";
//import { getRestaurants } from "../../services/restaurants";
import "./Restaurants.css";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
  return (
    <div className="card-container">
      {props.restaurants.map((el, idx) => (
        <div key={idx} className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={el.image} alt="food-img" />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              <h3>{el.name}</h3>
              <i className="material-icons right">more_vert</i>
            </span>
            <Link to={`/restaurants/${el._id}`}>
              <button className="btn teal darken-3 ">Purchase</button>
            </Link>

            {props.currentUser.name === "admin" && (
              <Link to={`/restaurants/edit/${el._id}`}>
                <button className=" btn teal darken-3 button-update">
                  Update
                </button>
              </Link>
            )}
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <h2>{el.name}</h2>
              <i className="material-icons right">close</i>
            </span>
            <div className="details">
              <p>
                <strong> Address:</strong> {el.address}
              </p>
              <p>
                <strong>Pick-up Time:</strong> {el.pickUpTime}
              </p>
              <p>
                <strong>Price:</strong> ${el.price}
              </p>
              <p>
                <strong>Number of Bags:</strong> {el.NumOfBags}
              </p>
              <p>
                <strong>Pick-up Time:</strong> {el.pickUpTime}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
