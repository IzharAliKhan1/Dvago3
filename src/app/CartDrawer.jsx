"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "@/app/CartContext";

export default function CartDrawer() {
  const [mounted, setMounted] = useState(false);
  const { cartItems, cartOpen, setCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Overlay */}
      {cartOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setCartOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-lime-600 text-white">
          <h2 className="text-lg font-bold">🛒 My Cart</h2>
          <button onClick={() => setCartOpen(false)} className="text-white text-2xl hover:opacity-75">✕</button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <span className="text-6xl mb-4">🛒</span>
              <p className="text-lg font-medium">Cart is empty</p>
              <p className="text-sm">Add some products!</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                <div className="relative w-14 h-14 flex-shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate">{item.title}</p>
                  <p className="text-lime-600 font-bold text-sm">{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-lime-100 text-lime-700 font-bold text-sm flex items-center justify-center hover:bg-lime-200">-</button>
                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-lime-100 text-lime-700 font-bold text-sm flex items-center justify-center hover:bg-lime-200">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 text-lg flex-shrink-0">🗑️</button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-5 py-4 border-t">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-gray-700">Total:</span>
              <span className="text-xl font-bold text-lime-600">${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full bg-lime-600 hover:bg-lime-700 text-white font-bold py-3 rounded-xl transition">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}