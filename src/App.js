import "./App.css";
import { Route, Routes } from "react-router-dom";
import Product from "./page/product/Product";
import Admin from "./Login/Index";
import Home from "./page/Home";
import User from "./page/User";
import AddProduct from "./page/product/AddProduct";
import CartProduct from "./page/product/CartProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="add-product/:id?" element={<AddProduct />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="user" element={<User />}>
          <Route path="add-user"></Route>
        </Route>
      </Route>
      <Route index element={<Home />} />
      <Route path="cart" element={<CartProduct />} />
    </Routes>
  );
}

export default App;
