import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="page-container">
      <div class="color-block">
        <div class="site-name-box">
          <h1 class="site-name">Food Waste Fighters</h1>
        </div>
        <div class="home-img">
          <div class="home-cover"></div>
        </div>
        <div class="about-home">
          Each year, more than one third of food produced in the world goes to
          waste, and it is responsible for 10% of all greenhouse gas emissions.{" "}
          <br />
          <Link to="/signup" className="join">
            Join the fight
          </Link>{" "}
          to save our planet by rescuing surplus food from your local stores.
          It’s always a surprise, at a great price, and an instant good deed for
          the planet.
        </div>
      </div>
    </div>
  );
};

export default Home;
