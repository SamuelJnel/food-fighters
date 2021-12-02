import React from "react";
import "./Restaurants.css";
import { Link } from "react-router-dom";

const Restaurants = (props) => {
  return (
    <div className="list-container">
      {props.restaurants.map((el, idx) => (
        <div key={idx} className="row list-container-card">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-header">Img</div>
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">Address: {el.address}</p>
                <p className="card-text">Pick-up Time: {el.pickUpTime}</p>
                <p className="card-text">Price: ${el.price}</p>
                <p className="card-text">Number of Bags: {el.NumOfBags}</p>
                <Link to={`/restaurants/${el._id}`}>
                  <button className="btn btn-primary">Purchase</button>
                </Link>
                <Link to={`/restaurants/edit/${el._id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
