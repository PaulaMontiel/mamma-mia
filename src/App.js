import React from 'react';
import MyPizzaContext from "./pizza_context"
import MyTotalAmountContext from "./total_amount_context"
import CartContext from "./cart_context"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Pizza from "./views/Pizza.jsx";
import Carrito from "./views/Carrito.jsx";
import './App.css';

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const endpoint = '/pizzas.json';
  const [cost, setCost] = useState(0);

  const consultarInformacion = async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data[0]);
    setPizzas(data);
  };

  useEffect(() => {
    consultarInformacion();
  }, [])
  console.log(pizzas);
  return (
    <div className="App">
      <MyPizzaContext.Provider value={{ pizzas, setPizzas }}>
        <MyTotalAmountContext.Provider value={{ cost, setCost }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter basename='mamma-mia'>
            <Navbar cost = { cost }/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/carrito" element={<Carrito />} />
            </Routes>
          </BrowserRouter>
          </CartContext.Provider>
        </MyTotalAmountContext.Provider>
      </MyPizzaContext.Provider>
    </div>
  );
}

export default App;
