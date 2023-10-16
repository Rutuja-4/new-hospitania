<<<<<<< HEAD

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
=======
// import Carausal from "./Footer/Carausal";
import Footer from "./Footer/Footer";
import Home from "./Home/Home/Home";
// import Shoppage from "./Shop-Pages/Shoppage";
// import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Home/>
      <Footer/>
    </div>
>>>>>>> origin/main
  );
}

export default App;
