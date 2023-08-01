import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import WaiterBreakfast from "./components/waiter/waiterBreakfast";
import WaiterLunch from "./components/waiter/waiterLunch";
import Kitchen from "./components/orders/kitchen";
import Staff from "./components/staff/staffList"



const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/waiterBreakfast" element={<WaiterBreakfast />} />
          <Route path="/waiterLunch" element={<WaiterLunch />} />
          <Route path="/orderKitchen" element={<Kitchen />} />
          <Route path="/staffList" element={<Staff />} />  


        </Routes>
      </BrowserRouter>
  );
};

export default App;
