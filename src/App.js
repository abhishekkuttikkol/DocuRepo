import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes , Route } from 'react-router-dom'

import Create from "./Components/Create";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='create' element={<Create />}></Route>
        </Routes> 
      </BrowserRouter> 
     
    </div>
  );
}

export default App;
