import React from 'react';
import { ShoppingCart as CartIcon, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCartStore } from "../store/cartStore.js";

import { useLanguageStore } from '../store/languageStore.js';

const products = [
  { id: 1, name: "Smartfon", price: 499.99 },
  { id: 2, name: "Noutbuk", price: 899.99 },
  { id: 3, name: "Quloqchin", price: 79.99 },
  { id: 4, name: "Soat", price: 199.99 },
];

export const ShoppingCart = () => {
  const { items, addToCart, updateQuantity, removeFromCart, clearCart } = useCartStore();
  const { t, language } = useLanguageStore();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ShoppingBag size={20} />
          {language === 'uz' ? 'Mahsulotlar' : 'Products'}
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border dark:border-gray-700 rounded-lg flex flex-col"
            >
              <span className="font-medium">{product.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                ${product.price}
              </span>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                {language === 'uz' ? 'Qo\'shish' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <CartIcon size={24} />
            <span className="font-bold">
              {language === 'uz' ? 'Savatcha' : 'Cart'} ({items.length})
            </span>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="px-4 py-2 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              {t('clearCart')}
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            {language === 'uz' ? 'Savatcha bo\'sh' : 'Cart is empty'}
          </div>
        ) : (
          <>
            <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
                >
                  <span className="flex-1">{item.name}</span>
                  <span className="text-gray-600 dark:text-gray-400">
                    ${item.price}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 rounded-full bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500"
                    >
                      <Plus size={16} />
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-1 text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right">
              <div className="text-lg font-bold">
                {language === 'uz' ? 'Jami' : 'Total'}: ${total.toFixed(2)}
              </div>
              <button
                className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                onClick={() => alert(language === 'uz' ? 'Buyurtma berildi!' : 'Order placed!')}
              >
                {language === 'uz' ? 'Buyurtma berish' : 'Place Order'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
