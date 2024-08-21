// components/Products/ProductCard.jsx
import React from 'react';
import AddToCartButton from './AddToCartButton';

const ProductCard = ({ name, oldPrice, newPrice, image }) => (
  <div className="product">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p className="price">
      <span className="old-price">${oldPrice.toFixed(2)}</span> ${newPrice.toFixed(2)}
    </p>
    <AddToCartButton productName={name} />
  </div>
);

export default ProductCard;