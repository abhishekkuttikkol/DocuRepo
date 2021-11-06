import "./App.css";
import Home from "./Pages/Home";
import { Routes, Route, Switch } from "react-router";

import Create from "./Components/Create";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
const user = false;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Signin/>}
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
