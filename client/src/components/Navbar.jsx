import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets.js";
import { Heart, ShoppingBag } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";
import toast from "react-hot-toast";

const Navbar = () => {
  const { navigate, user, setUser, cart, favorite, axios } =
    useContext(AppContext);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Highlight active route
  const isActive = (path) =>
    location.pathname === path
      ? "text-secondary border-b-2 border-primary pb-1"
      : "hover:text-secondary transition";

  // Logout handler
  const logout = async () => {
    try {
      const { data } = await axios.get("/api/auth/logout");
      if (data.success) {
        toast.success(data.message || "Logged out successfully!");
        setUser(null);
        navigate("/");
      } else {
        toast.error(data.message || "Logout failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout error occurred!");
    }
  };

  // Close mobile menu after navigation
  const handleNav = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative shadow-sm z-50">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-36" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-[16px] font-medium">
        <Link to="/" className={isActive("/")}>
          Home
        </Link>
        <Link to="/shop" className={isActive("/shop")}>
          Shop
        </Link>
        <Link to="/about" className={isActive("/about")}>
          About
        </Link>
        <Link to="/contact" className={isActive("/contact")}>
          Contact
        </Link>

        <button
          onClick={() => navigate("/admin")}
          className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition"
        >
          Admin Dashboard
        </button>

        {/* Cart */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <ShoppingBag className="w-5 h-5" />
          {cart?.length > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </div>

        {/* Wishlist */}
        <div onClick={() => navigate("/wishlist")} className="relative cursor-pointer">
          <Heart className="w-5 h-5" />
          {favorite?.length > 0 && (
            <span className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] flex items-center justify-center rounded-full">
              {favorite.length}
            </span>
          )}
        </div>

        {/* User Menu */}
        {user ? (
          <div className="relative group">
            <img
              src={assets.profile_pic}
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer border border-gray-200"
            />
            <div className="absolute right-0 mt-2 w-44 bg-secondary text-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <ul className="py-2">
                <li
                  onClick={() => {
                    navigate("/my-orders");
                  }}
                  className="px-4 py-2 cursor-pointer hover:bg-primary transition"
                >
                  My Orders
                </li>
                <li
                  onClick={logout}
                  className="px-4 py-2 cursor-pointer hover:bg-primary transition"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-2 bg-primary hover:bg-secondary text-white rounded-full transition"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="sm:hidden"
      >
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-64px left-0 w-full bg-white shadow-lg py-4 flex flex-col gap-4 px-6 text-base font-medium sm:hidden z-50">
          <Link onClick={() => handleNav("/")} className={isActive("/")}>
            Home
          </Link>
          <Link onClick={() => handleNav("/shop")} className={isActive("/shop")}>
            Shop
          </Link>
          <Link onClick={() => handleNav("/about")} className={isActive("/about")}>
            About
          </Link>
          <Link
            onClick={() => handleNav("/contact")}
            className={isActive("/contact")}
          >
            Contact
          </Link>
          <button
            onClick={() => handleNav("/admin")}
            className="bg-primary text-white px-4 py-2 rounded-full"
          >
            Admin Dashboard
          </button>

          {user ? (
            <div className="flex flex-col gap-2">
              <button
                onClick={() => handleNav("/my-orders")}
                className="text-left w-full px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
              >
                My Orders
              </button>
              <button
                onClick={logout}
                className="text-left w-full px-4 py-2 bg-secondary text-white rounded hover:bg-primary transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNav("/login")}
              className="px-8 py-2 bg-primary hover:bg-secondary text-white rounded-full transition"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

