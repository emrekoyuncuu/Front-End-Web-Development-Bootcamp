// components/Products/AddToCartButton.jsx
import React from 'react';

const AddToCartButton = ({ productName }) => {
  const handleAddToCart = () => {
    // In a real application, this would add the product to the cart
    console.log(`Added ${productName} to cart`);
    // You could also trigger a toast notification here
  };

  return (
    <button className="add-to-cart" onClick={handleAddToCart}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;