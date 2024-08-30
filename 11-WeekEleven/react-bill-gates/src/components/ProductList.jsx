import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, cart, balance, onBuy, onSell }) {
  return (
    // Grid layout for product items, responsive design using Tailwind classes
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          quantity={cart[product.id] || 0}
          balance={balance}
          onBuy={() => onBuy(product.id)}
          onSell={() => onSell(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;