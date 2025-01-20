import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar/Navbar';
import { LoginSignup } from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import ProductDetail from './Pages/ProductDetail'; // Import ProductDetails
import { Home } from './Pages/Home';
import Towels from './Pages/Towels';
import Wishlist from './Pages/Wishlist';
import Bags from './Pages/Bags';
import Napkins from './Pages/Napkins';
import Bedsheets from './Pages/Bedsheets';
import Cupcoaster from './Pages/Cupcoaster';
import Bamboo from './Pages/Bamboo';
import Paperfiles from './Pages/Paperfiles';
import CustProduct from './Pages/custproduct';
import PaintApp from "./PaintApp";
import Admin from './Pages/Admin';
import ListProduct from './Components/ListProduct/ListProduct';
import AddProduct from './Components/AddProduct/AddProduct';
import Account from './Pages/Account';
// Towels data
/*const towels = [
  { id: 1, name: 'Rose printed towel', image: '/assets/T1.png', new_price: 130.0, old_price: 80.0 },
  { id: 2, name: 'Blue leaf towel', image: '/assets/T2.png', new_price: 130.0, old_price: 80.0 },
  { id: 3, name: 'Brown cotton towel', image: '/assets/T3.png', new_price: 130.0, old_price: 80.0 },
  { id: 4, name: 'Multi circle cotton towel', image: '/assets/T4.png', new_price: 130.0, old_price: 80.0 },
  { id: 5, name: 'Baby penguin towel', image: '/assets/T5.png', new_price: 130.0, old_price: 80.0 },
];*/

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/product/:id" element={<ProductDetail  />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/towels" element={<Towels  />} />
        <Route path="/bags" element={<Bags />} />
        <Route path="/napkins" element={<Napkins />} />
        <Route path="/bedsheets" element={<Bedsheets />} />
        <Route path="/cupcoaster" element={<Cupcoaster />} />
        <Route path="/bamboo" element={<Bamboo />} />
        <Route path="/paperfiles" element={<Paperfiles />} />
        <Route path="/custproduct" element={<CustProduct />} />
        <Route path="/paintapp" element={<PaintApp />} />
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
