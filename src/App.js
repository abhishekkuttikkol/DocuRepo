import "./App.css";
import Home from "./Pages/Home";
import { Route, Switch, useHistory } from "react-router";
import { App as Firebase } from "./Firebase";
import Create from "./Components/Create";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import { useContext, useEffect } from "react";
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
        <Route path="/signup">
          <Signup />{" "}
        </Route>
        <Route path="/signin">
          {" "}
          <Signin />{" "}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
