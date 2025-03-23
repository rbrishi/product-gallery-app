import React, { useRef, useCallback } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, loading, hasMore, loadMore }) => {
  const observer = useRef();

  const lastProductRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <div
          key={product.id}
          ref={products.length === index + 1 ? lastProductRef : null}
        >
          <ProductCard product={product} />
        </div>
      ))}
      {loading && (
        <div className="col-span-full text-center py-4">
          <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      )}
    </div>
  );
};

export default ProductList;