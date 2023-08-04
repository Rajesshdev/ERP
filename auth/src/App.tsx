import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Pages/Sigin'

const App = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default App;