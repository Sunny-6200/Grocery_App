import { Route, Routes, useLocation } from 'react-router-dom'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetails from './pages/ProductDetails';
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from './pages/Signup';
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import CheckOut from "./pages/Checkout";
import AddAddress from './pages/AddAddress';
import MyOrder from "./pages/MyOrder";
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import { AppContext } from './context/AppContext';

import AddCategory from './pages/admin/AddCategory';
import AddProduct from './pages/admin/AddProduct';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AllCategories from './pages/admin/AllCategories';
import AllProducts from './pages/admin/Allproducts';
import Dashboard from './pages/admin/Dashboard';
import Orders from './pages/admin/Orders';

import { useContext } from 'react';

const App = () => {
  const adminpath = useLocation().pathname.includes("admin");
  const { admin } = useContext(AppContext);

  return (
    <>
      <Toaster />
      <div className='w-full mx-auto px-4 sm:px-6 lg:px-24'>
        {!adminpath && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/product/:id" element={<ProductDetails />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/wishlist" element={<WishList />} /> 
        <Route path="/checkout" element={<CheckOut />} /> 
        <Route path="/add-address" element={<AddAddress />} /> 
        <Route path="/myorder" element={<MyOrder />} /> 
        {/* admin Routes */}
         <Route
            path="/admin"
            element={admin ? <AdminLayout /> : <AdminLogin />}
          >
            <Route index element={admin ? <Dashboard /> : <AdminLogin />} />
            <Route
              path="add-category"
              element={admin ? <AddCategory /> : <AdminLogin />}
            />
            <Route
              path="add-product"
              element={admin ? <AddProduct /> : <AdminLogin />}
            />
            <Route
              path="categories"
              element={admin ? <AllCategories /> : <AdminLogin />}
            />
            <Route
              path="products"
              element={admin ? <AllProducts /> : <AdminLogin />}
            />
            <Route
              path="orders"
              element={admin ? <Orders /> : <AdminLogin />}
            />
          </Route>

      </Routes>
      {!adminpath && <Footer />}
      
  </div>
    </>
  )
}

export default App

