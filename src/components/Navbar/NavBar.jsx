import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import "./logo3.jpg";

const NavBar = (props) => {
  let nav = props.currentUser ? (
    <div className="nav teal darken-3">
      {/* <div class="nav-wrapper left">
        <a href="/" class="brand-logo">
          <img class="logo" src="../../../public/logo2.png" alt="logo" />
        </a>
      </div> */}
      <ul>
        <li>
          <span className="user">Welcome, {props.currentUser.name}</span>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/restaurants" activeClassName="active">
            Restaurants
          </NavLink>
        </li>
        <li>
          <NavLink to="/order" activeClassName="active">
            Order{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.handleLogout}>
            Logout{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  ) : (
    <div className="nav teal darken-3">
      <ul>
        <li>
          <NavLink to="/" activeClassName="active">
            Home{" "}
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" activeClassName="active">
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
  return nav;
};

export default NavBar;
