// components/Products/Products.jsx
import React from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const productsData = [
    {
      name: 'Kettlebell / 5kg',
      oldPrice: 5.00,
      newPrice: 3.00,
      image: '/purchase1.jpg'
    },
    {
      name: 'Treadmill',
      oldPrice: 10.00,
      newPrice: 8.00,
      image: '/purchase2.jpg'
    },
    {
      name: 'Adjustable Dumbbells',
      oldPrice: 15.00,
      newPrice: 12.00,
      image: '/purchase3.jpg'
    },
    {
      name: 'Kettlebell / 3kg',
      oldPrice: 15.00,
      newPrice: 12.00,
      image: '/purchase4.jpg'
    }
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">PURCHASE FROM US</h2>
        <p>High-quality fitness equipment for your home workouts.</p>
        <div className="product-list">
          {productsData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;