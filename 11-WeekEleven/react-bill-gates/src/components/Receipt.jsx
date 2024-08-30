import React from 'react';

function Receipt({ cart, products, totalSpent }) {
  // Filter out items with quantity > 0
  const purchasedItems = Object.entries(cart).filter(([_, quantity]) => quantity > 0);

  // If no items purchased, don't render the receipt
  if (purchasedItems.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Your Receipt</h2>
      <div className="space-y-2">
        {/* List of purchased items */}
        {purchasedItems.map(([productId, quantity]) => {
          const product = products.find(p => p.id === parseInt(productId));
          return (
            <div key={productId} className="flex justify-between items-center">
              <span className="font-semibold">{product.name}</span>
              <span>x{quantity}</span>
              <span className="text-green-600">${(product.price * quantity).toLocaleString()}</span>
            </div>
          );
        })}
      </div>
      {/* Total spent section */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total Spent:</span>
          <span className="text-green-600">${totalSpent.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default Receipt;