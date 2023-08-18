import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import { Kitchen }  from "./components/orders/kitchen";
import Waiter from "./components/waiter/Waiter";
import Staff from "./components/staff/staffList";
import ProductsMenuManager from "./components/menu/ProductsMenuManager";
import { OrderWaiter } from "./components/orders/OrderWaiter";




const App: React.FC = () => {
  const [deletedProductIds, setDeletedProductIds] = useState<number[]>([]);
  const handleDeleteProduct = (productId: number) => {
    setDeletedProductIds((prevIds) => [...prevIds, productId]);
  };  

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orderKitchen" element={<Kitchen />} />
          <Route path="/waiter" element={<Waiter />} />
          <Route path="/staffList" element={<Staff />} />  
          <Route path="/ProductsMenuManager" element={<ProductsMenuManager
           deletedProductIds={deletedProductIds}
           onDeleteProduct={handleDeleteProduct}
          />}/>  
          <Route path="/orderwaiter" element={<OrderWaiter />} /> 
        </Routes>
      </BrowserRouter>
  );
};

export default App;
