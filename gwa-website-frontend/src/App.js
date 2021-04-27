import React, { useState } from "react";
import "./App.scss";
import "./index.css";
import Navigate from "./components/Navbar/navbar";
import Auth from "./components/Auth/auth";
import Home from "./pages/home";
import Amenities from "./pages/amenities";
import Location from "./pages/map";
import Contact from "./pages/contact";
import Photos from "./pages/photos"
import * as ROUTES from "./constants/routes";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  const [userId, setUserId] = useState(undefined);
  const [reviews, setReviews] = useState([]);
  const [rev, setRev] = useState([]);
  const [name, setName] = useState("");

  const updateToken = (newToken, id) => {
    setSessionToken(newToken);
    setUserId(id);
    localStorage.setItem("id", id);
    localStorage.setItem("token", newToken);
  };

  const clearToken = () => {
    setUserId(undefined);
    setSessionToken(undefined);
    localStorage.clear();
  };

  return (
    <div className="App">
      <Router>
        <Navigate clearToken={clearToken} />
        {/* {!sessionToken ? (
          <Auth updateToken={updateToken} />
        ) : ( */}
        <Switch>
          <Route path={ROUTES.AMENITIES} component={Amenities} />
          <Route path={ROUTES.PHOTOS} component={Photos} />
          <Route path={ROUTES.MAP} component={Location} />
          <Route path={ROUTES.CONTACT} component={Contact} />
          <Home />
        </Switch>
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
