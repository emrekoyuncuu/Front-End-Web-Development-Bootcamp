import React from 'react';

function ProductItem({ product, quantity, balance, onBuy, onSell }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Product image */}
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        {/* Product name and price */}
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-green-600 font-bold mb-4">${product.price.toLocaleString()}</p>
        {/* Buy and sell buttons with quantity display */}
        <div className="flex items-center justify-between">
          <button
            onClick={onSell}
            disabled={quantity === 0}
            className={`px-4 py-2 rounded ${
              quantity === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            Sell
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-16 text-center border rounded"
          />
          <button
            onClick={onBuy}
            disabled={product.price > balance}
            className={`px-4 py-2 rounded ${
              product.price > balance ? 'bg-gray-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;