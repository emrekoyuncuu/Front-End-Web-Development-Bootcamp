import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Receipt from './components/Receipt';
import { products } from './data/products';

function App() {
  // State for managing balance and cart
  const [balance, setBalance] = useState(100000000000); // Initial balance: $100 billion
  const [cart, setCart] = useState({});

  // Function to handle buying a product
  const handleBuy = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product.price <= balance) {
      setBalance(prevBalance => prevBalance - product.price);
      setCart(prevCart => ({
        ...prevCart,
        [productId]: (prevCart[productId] || 0) + 1
      }));
    }
  };

  // Function to handle selling a product
  const handleSell = (productId) => {
    const product = products.find(p => p.id === productId);
    if (cart[productId] > 0) {
      setBalance(prevBalance => prevBalance + product.price);
      setCart(prevCart => ({
        ...prevCart,
        [productId]: prevCart[productId] - 1
      }));
    }
  };

  // Calculate total amount spent
  const totalSpent = Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === parseInt(productId));
    return total + (product.price * quantity);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header section */}
      <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white py-4 shadow-lg z-50">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-center">Spend Bill Gates' Money</h1>
          <div className="text-xl font-semibold text-center mt-2">
            Balance: ${balance.toLocaleString()}
          </div>
        </div>
      </header>
      {/* Main content with padding-top to account for fixed navbar */}
      <main className="container mx-auto px-4 py-8 mt-24">
        <ProductList
          products={products}
          cart={cart}
          balance={balance}
          onBuy={handleBuy}
          onSell={handleSell}
        />
        <Receipt cart={cart} products={products} totalSpent={totalSpent} />
      </main>
    </div>
  );
}

export default App;