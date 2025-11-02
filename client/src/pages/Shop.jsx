import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const Shop = () => {
  const { productsData } = useContext(AppContext);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true);
    try {
      const query = input.toLowerCase().trim();
      if (query === "") {
        setFilteredProducts(productsData);
      } else {
        const result = productsData.filter((product) =>
          product?.name?.toLowerCase()?.includes(query)
        );
        setFilteredProducts(result);
      }
    } catch (error) {
      console.error("Error filtering products:", error);
      setFilteredProducts([]);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    handleSearch();
  }, [input, productsData]);
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-center mt-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-10 py-3 outline-none border border-secondary"
          placeholder="Search for products"
        />
        <button 
          onClick={handleSearch}
          className="hidden md:flex px-10 py-[13px] bg-primary text-white cursor-pointer hover:bg-secondary transition-colors"
        >
          Search
        </button>
      </div>
      <h1 className="mt-4 text-secondary font-extrabold text-3xl">
        Explore All Products
      </h1>
      <div className="mt-6">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-xl text-gray-600">No products found matching your search.</p>
            <button 
              onClick={() => setInput("")} 
              className="mt-4 px-6 py-2 bg-secondary text-white rounded-md hover:bg-primary transition-colors"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-8 px-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Shop;
