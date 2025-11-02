
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { categories, products, blogs } from "../assets/assets";

export const AppContext = createContext();

const currency = import.meta.env.VITE_CURRENCY;
axios.defaults.baseURL = import.meta.env.VITE_BASEURL;
axios.defaults.withCredentials = true;

const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  const checkAuth = async () => {
    try {
      const { data } = await axios.get("/api/auth/is-auth");
      if (data.success) setUser(true);
    } catch (error) {
      console.log("Auth error:", error.message);
    }
  };

  const checkAdmin = async () => {
    try {
      const { data } = await axios.get("/api/admin/is-admin");
      if (data.success) setAdmin(true);
    } catch (error) {
      console.log("Admin check error:", error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("/api/category/all");
      setCategoriesData(data.success ? data.categories : categories);
    } catch {
      setCategoriesData(categories); // fallback
    }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get("/api/product/all");
      setProductsData(data.success ? data.products : products);
    } catch {
      setProductsData(products); // fallback
    }
  };

  const fetchBlogs = async () => setBlogsData(blogs);

  const addToCart = (product) => {
    setCart((prev) => {
      const newCart = structuredClone(prev);
      const existing = newCart.find((item) => item._id === product._id);
      if (existing) existing.quantity += 1;
      else newCart.push({ ...product, quantity: 1 });
      toast.success("Product added to cart");
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = structuredClone(prev);
      const existing = newCart.find((item) => item._id === id);
      if (existing.quantity === 1)
        return newCart.filter((item) => item._id !== id);
      existing.quantity -= 1;
      return newCart;
    });
  };

  const addToFavorite = (product) => {
    setFavorite((prev) => {
      const newFavs = structuredClone(prev);
      if (!newFavs.find((i) => i._id === product._id)) {
        newFavs.push(product);
        toast.success("Product added to favorite");
      } else toast.error("Already in favorite");
      return newFavs;
    });
  };

  const removeFromFavorite = (id) => {
    setFavorite((prev) => {
      const filtered = prev.filter((i) => i._id !== id);
      toast.success("Product removed from favorite");
      return filtered;
    });
  };

  const getCartTotal = () =>
    cart.reduce((t, item) => t + item.offerPrice * item.quantity, 0);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    fetchBlogs();
    checkAuth();
    checkAdmin();
  }, []);

  const value = {
    navigate,
    user,
    setUser,
    admin,
    setAdmin,
    loading,
    setLoading,
    currency,
    categoriesData,
    productsData,
    blogsData,
    cart,
    favorite,
    addToCart,
    removeFromCart,
    addToFavorite,
    removeFromFavorite,
    getCartTotal,
    axios,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;