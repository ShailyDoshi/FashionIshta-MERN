import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Footer from "./Components/Footer";
import Popular from "./Components/Popular";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Mens" element={<Category />} />
          <Route path="/Womens" element={<Category />} />
          <Route path="/Product" element={<Popular />} />
          {/* <Route path=":productId" element={<Product />} /> */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        {/* <Popular /> */}
        <Footer />
      </BrowserRouter>
    </main>
  );
}
