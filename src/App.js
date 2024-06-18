import "./App.css";
import FilteredProducts from "./Components/FilteredProducts";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./Components/SingleProduct";
import { useSelector } from "react-redux";
import Login from "./Components/Login";

function App() {
  
  const user = useSelector((state) => state.auth.user);
  const {authUser} = user;

  return (
    <div className="App text-3xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login/>} />
          

          <Route
            path="/filteredproducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredproducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
