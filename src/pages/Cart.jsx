// src/pages/CartPage.js
import React from "react";
import { Trash2 } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext"; // Import useCart hook

const CartPage = () => {
  const { cart, removeFromCart, updateCartQuantity } = useCart(); // Include updateCartQuantity

  // Calculate the total price of the cart items
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-blue-50 text-gray-800">
      {/* Navbar Component */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Your Cart</h1>

        {cart.length === 0 ? (
          <p className="text-xl text-center">Your cart is empty.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Product</th>
                  <th className="text-left py-2">Price</th>
                  <th className="text-left py-2">Quantity</th>
                  <th className="text-left py-2">Total</th>
                  <th className="text-left py-2">Delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">{item.name}</td>
                    <td className="py-4">${item.price.toFixed(2)}</td>
                    <td className="py-4">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartQuantity(item.id, Number(e.target.value))
                        } // Allow editing
                        className="w-16 px-2 py-1 border rounded"
                      />
                    </td>
                    <td className="py-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => removeFromCart(item.id)} // Remove item from cart
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 className="inline-block" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-8 flex justify-between items-center">
              <div className="text-2xl font-bold">
                Total: ${total.toFixed(2)}
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default CartPage;