import React, {useState} from "react";
import "./App.css";
import "./index.css";
import NavBar from "./components/Navbar/navbar";
import Auth from './components/Auth/auth'
import { Switch, BrowserRouter as Router, Route} from "react-router-dom"




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
      {/* <Router> */}
        <NavBar clearToken={clearToken} />
        {/* {!sessionToken ? (
          <Auth updateToken={updateToken} />
        ) : (
          <Switch>
            
          </Switch>
        )}
      </Router> */}
    </div>
  )
}

export default App;
