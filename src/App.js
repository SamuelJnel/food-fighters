import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import { getRestaurants } from "./services/restaurants";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import About from "./pages/About/About";
import Order from "./pages/Order/Order";
import Restaurants from "./pages/Restaurants/Restaurants";
import RestaurantOrder from "./pages/RestaurantOrder/RestaurantsOrder";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import userService from "./services/userService";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Edit from "./pages/Edit/Edit";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useState(userService.getUser());

  useEffect(async () => {
    const data = await getRestaurants();

    setRestaurants(data);
  }, []);

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };
  // console.log(user);

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  return (
    <div>
      <Router>
        <NavBar currentUser={user} handleLogout={handleLogout} />
        <Switch>
          <Route
            path="/login"
            render={({ history }) => (
              <Login
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            )}
          ></Route>
          <Route
            path="/signup"
            render={({ history }) => (
              <Signup
                history={history}
                handleSignupOrLogin={handleSignupOrLogin}
              />
            )}
          ></Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <ProtectedRoute exact path="/restaurants">
            <Restaurants restaurants={restaurants} currentUser={user} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/restaurants/edit/:id">
            <Edit />
          </ProtectedRoute>
          <ProtectedRoute exact path="/order">
            <Order restaurants={restaurants} user={user} />
          </ProtectedRoute>
          <ProtectedRoute exact path="/restaurants/:id">
            <RestaurantOrder restaurants={restaurants} user={user} />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/* <ProtectedRoute exact path="/restaurants">
            <Restaurants restaurants={restaurants} />
          </ProtectedRoute>

          <ProtectedRoute exact path="/order">
            <Order />
          </ProtectedRoute>

          <ProtectedRoute exact path="/restaurants/:id">
            <RestaurantOrder />
          </ProtectedRoute> */
