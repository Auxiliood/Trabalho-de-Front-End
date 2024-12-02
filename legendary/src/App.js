import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import Register from "./components/Register";
import Login from "./components/Login";
import RegisterProduct from "./components/RegisterProduct";
import { useEffect, useState } from "react";
import Orders from "./components/Orders";


function App() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const addToOrders = (product) => {
    setOrders((prevOrders) => [...prevOrders, product]);
  };

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
      <Router>
        <div className="App">
          <Navbar orders={orders} />
          <main>
            <Header />
            <div className="page-inner-content">
              <Routes>
                <Route path="/" element={
                  <>
                    <div className="section-title">
                      <h3>Produtos selecionados</h3>
                      <div className="underline"></div>
                    </div>
                    <div className="main-content">
                      <ProductsList products={products} addToOrders={addToOrders} />
                    </div>
                  </>
               } />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/orders" element={<Orders orders={orders} />} />  
                  <Route path="/register-product" element={<RegisterProduct addProduct={addProduct} />} />
              </Routes>
            </div>
          </main>
        </div>
      </Router>
  );
}

export default App;