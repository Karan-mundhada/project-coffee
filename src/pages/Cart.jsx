// src/pages/CartPage.js
import React from "react";
import { Trash2 } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Espresso Machine", price: 299.99, quantity: 1 },
    { id: 2, name: "Colombian Coffee Beans", price: 14.99, quantity: 2 },
    { id: 3, name: "French Press", price: 29.99, quantity: 1 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800">
      {/* Navbar Component */}
      <NavBar />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

        <div className="bg-white rounded-lg shadow-md p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-left py-2">Price</th>
                <th className="text-left py-2">Quantity</th>
                <th className="text-left py-2">Total</th>
                <th className="text-left py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-4">{item.name}</td>
                  <td className="py-4">${item.price.toFixed(2)}</td>
                  <td className="py-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="py-4">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4">
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="inline-block" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default CartPage;