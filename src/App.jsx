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
import bannermens from "./assets/bannermens.png";
import bannerwomens from "./assets/bannerwomens.png";
import CartItems from "./Components/CartItems";

export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Mens"
            element={<Category category="men" banner={bannermens} />}
          />
          <Route
            path="/Womens"
            element={<Category category="women" banner={bannerwomens} />}
          />
          {/* Updated route to include dynamic productId */}
          <Route path="/product/:productId" element={<Product />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/Cart-Page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Popular /> */}
        <Footer />
      </BrowserRouter>
    </main>
  );
}
