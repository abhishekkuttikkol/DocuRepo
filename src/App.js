import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route, Switch, useHistory } from "react-router";
import { App as Firebase } from "./Firebase";
import Create from "./Components/Create";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Store/AuthContext";

function App() {
  const history = useHistory();
  const { setUser, user } = useContext(AuthContext);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : history.push("/signin")}
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/signup">{user ? <Signup /> : history.push("/")}</Route>
        <Route path="/signin">{user ? <Signin /> : history.push("/")}</Route>
      </Switch>
    </div>
  );
}

export default App;
