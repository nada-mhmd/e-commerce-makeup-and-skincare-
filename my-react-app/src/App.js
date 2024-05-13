// App.jsx
import React from "react";
import { Navigate, BrowserRouter , Router, Route, Routes } from "react-router-dom";
import NavbarComponent from "./component/navbar/navbar";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Shopcategoery from "./pages/shopcategoery";
import Product from "./pages/product";
import Makeupbanner from "./images/banner-large-1.jpg";
import skinbanner from "./images/banner-large-image2.jpg";
import Footer from "./component/footer/footer";
import ScrollToTop from "./component/scroll/ScrollToTop";
import CheckoutPage from "./pages/check";
import Home from "./component/Home/Home";
import Spage from "./component/spage.jsx/spage";
import Register from "../src/Auth/Register";
import Login from "../src/Auth/Login";
import Dashboard from "./pages/dashboard";
import { useAuth } from "../src/contexts/AuthContext";

function App() {
  const {isAuthenticated} = useAuth();
  return (
    <div className="App">
      <BrowserRouter>
       
        <ScrollToTop />
        <Routes>
           <Route path="/Register" element={
          !isAuthenticated ? <Register  /> :<Navigate to="/home" />} />
          <Route path="/" element={
            !isAuthenticated ? <Login /> : <Navigate to="/home" />} />
          <Route path="/home" element={
          isAuthenticated ?<Home /> :<Login/> } />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/MakeUP" element={<Shopcategoery banner={Makeupbanner} category="MakeUP" />} />
          <Route path="/SkinCare" element={<Shopcategoery banner={skinbanner} category="SkinCare" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckoutPage />} />
          <Route path="/Spage" element={<Spage/>}/>
          <Route path="/Account" element={<Dashboard/>}/>
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;