
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx"; // make sure this path matches your file

const ProductCard = ({ product = {} }) => {
  // defensive destructuring: provide safe defaults if context isn't wired correctly
  const ctx = useContext(AppContext) || {};
  const addToCart = ctx.addToCart ?? (() => console.warn("addToCart not found in context"));
  const formatCurrency = ctx.formatCurrency ?? ((v) => (ctx.currency ? `${ctx.currency}${v}` : String(v)));
  const axios = ctx.axios ?? null;

  // Safe image builder: handles strings, imported modules, objects, or missing images
  const getImageSrc = () => {
    try {
      const base = axios?.defaults?.baseURL ?? import.meta.env.VITE_BASEURL ?? "";
      const imgs = product?.images;

      if (!imgs || imgs.length === 0) {
        return "https://via.placeholder.com/250x200?text=No+Image";
      }

      const first = imgs[0];

      // If it's an imported module (Vite/Webpack, the import is usually a string already)
      if (typeof first === "string") {
        // absolute URL already
        if (first.startsWith("http") || first.startsWith("//")) return first;
        // absolute path on same server
        if (first.startsWith("/")) return first;
        // likely a filename from backend
        return `${base.replace(/\/$/, "")}/uploads/${first}`;
      }

      // If it's an object with url/path/filename
      if (typeof first === "object" && first !== null) {
        const url = first.url ?? first.path ?? first.filename ?? first.src ?? null;
        if (!url) return "https://via.placeholder.com/250x200?text=No+Image";
        if (typeof url === "string" && (url.startsWith("http") || url.startsWith("//") || url.startsWith("/"))) return url;
        return `${base.replace(/\/$/, "")}/uploads/${url}`;
      }

      return "https://via.placeholder.com/250x200?text=No+Image";
    } catch (err) {
      console.error("getImageSrc error:", err);
      return "https://via.placeholder.com/250x200?text=No+Image";
    }
  };

  const imageSrc = getImageSrc();

  return (
    <div className="w-[250px] h-[380px] flex flex-col justify-between rounded-2xl bg-white p-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      {/* Product Image */}
      <Link to={`/product/${product._id}`} className="block group">
        <div className="w-full h-40 flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name ?? "Product"}
            className="object-contain h-full w-full group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/250x200?text=No+Image";
            }}
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="mt-3 flex flex-col grow justify-between">
        <div>
          <p className="text-xs text-gray-500 mb-1">
            {typeof product.category === "object" ? product.category?.name : product.category ?? ""}
          </p>

          <h3 className="text-base font-semibold text-gray-800 truncate">
            {product.name ?? "Unnamed product"}
          </h3>

          {product.weight && <p className="text-sm text-gray-500 mt-1">{product.weight}</p>}
        </div>

        {/* Pricing */}
        <div className="mt-2 flex items-center gap-3">
          {product.price != null && (
            <p className="text-sm text-gray-400 line-through">
              {formatCurrency((product.price ?? 0).toLocaleString('en-IN'))}
            </p>
          )}
          <p className="text-lg font-semibold text-green-600">
            {formatCurrency((product.offerPrice ?? product.price ?? 0).toLocaleString('en-IN'))}
          </p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={() => addToCart(product)}
        className="mt-3 flex items-center justify-center gap-2 w-full py-2 bg-secondary text-white text-sm rounded-full font-medium hover:bg-primary transition-all duration-300"
      >
        <ShoppingCart size={18} /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
