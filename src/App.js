import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import LoginPage from "./components/Login/LoginPage";
import HomePage from "./components/Home/HomePage";
import ErrorMessage from "./components/UI/ErrorMessage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState();

  const loginHandler = ({ username, password }) => {
    if (username === "admin" && password === "admin") { //username and password is hardcoded for this practical. it is not the correct way
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Incorrect Username/Password");
      setIsAuthenticated(false);
    }
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      {error ? <ErrorMessage errorMessage={error} /> : null}
      {isAuthenticated ? <HomePage logoutHandler={logoutHandler} /> : <LoginPage onLogin={loginHandler} />}
    </div>
  );
}

export default App;
