import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  let nav = props.currentUser ? (
    <div className="nav">
      <ul>
        <li>
          <span className="user">Welcome {props.currentUser.name}</span>
        </li>
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
        <li>
          <NavLink to="/about">About </NavLink>
        </li>
        <li>
          <NavLink to="/restaurants">Restaurants</NavLink>
        </li>
        <li>
          <NavLink to="/order">Order </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.handleLogout}>
            Logout{" "}
          </NavLink>
        </li>
      </ul>
    </div>
  ) : (
    <div className="nav">
      <ul>
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
        <li>
          <NavLink to="/">Home </NavLink>
        </li>
      </ul>
    </div>
  );
  return nav;
};

export default NavBar;
