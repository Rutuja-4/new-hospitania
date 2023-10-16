
import OrderDetails from "./Order Page/OrderDetails";
import Order from './Order Page/Order'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DSSaha_TB from "./Order Page/DSSaha_TB";

function App() {
  return (
    <>
      < BrowserRouter >
        <Routes>
          <Route path="/" element={<Order />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  ) }

export default App;
