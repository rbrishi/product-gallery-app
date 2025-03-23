import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import { ThemeContext } from "../context/ThemeContext";
import { useDebounce } from "../hooks/useDebounce";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const debouncedSearch = useDebounce(searchTerm, 500);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const fetchProducts = async (reset = false) => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");

      const allProducts = response.data;
      const startIndex = reset ? 0 : (page - 1) * 6;
      const newProducts = allProducts.slice(startIndex, startIndex + 6);

      setProducts((prev) => (reset ? allProducts : [...prev, ...newProducts]));
      setDisplayedProducts((prev) =>
        reset ? newProducts : [...prev, ...newProducts]
      );
      setHasMore(allProducts.length > startIndex + 6);
    } catch (err) {
      setError("Failed to fetch products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchProducts(true);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
      setDisplayedProducts(filtered.slice(0, page * 6));
      setHasMore(filtered.length > page * 6);
    }
  }, [debouncedSearch, products, page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isLoading={loading}
        />
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
          <button
            onClick={() => fetchProducts(true)}
            className="ml-2 text-blue-500 underline"
          >
            Retry
          </button>
        </div>
      )}

      <ProductList
        products={displayedProducts}
        loading={loading}
        hasMore={hasMore}
        loadMore={loadMore}
      />
    </div>
  );
};

export default Home;