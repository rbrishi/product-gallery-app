import React from "react";
import LazyLoad from "react-lazyload";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md transition-colors duration-200">
      <LazyLoad height={200} once>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4"
          loading="lazy"
        />
      </LazyLoad>
      <h3 className="text-lg font-semibold mb-2 dark:text-white line-clamp-2">
        {product.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">${product.price}</p>
    </div>
  );
};

export default ProductCard;
