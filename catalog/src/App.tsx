import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./Master/Products/Product";
import AddProduct from "./Pages/Products/AddProduct"
import Pricelist from "./Master/Pricelist/Pricelist"
import Main from "./Master/Cart/Products"
const App = () => (
  <Routes>
    <Route path="/products" element={<Products />} />
    <Route path='/products/add' element={<AddProduct />} />
    <Route path='/pricelist' element={<Pricelist />} />
    <Route path='/cart' element={<Main />} />

  </Routes>
);

export default App;