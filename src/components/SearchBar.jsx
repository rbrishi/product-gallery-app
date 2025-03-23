import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const SearchBar = ({ searchTerm, setSearchTerm, isLoading }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className={`w-full p-3 rounded-lg border-2 ${
          theme === "light"
            ? "bg-white border-gray-300"
            : "bg-gray-800 border-gray-700 text-white"
        } focus:outline-none focus:border-blue-500`}
      />
      {isLoading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;