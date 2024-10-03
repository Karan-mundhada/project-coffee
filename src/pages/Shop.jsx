// import React, { useState } from 'react';
// import NavBar from '../components/NavBar';
// import Footer from '../components/Footer';
// import { products } from "../data/products";
// import { CartProvider } from "../data/CartContext";

// const ShopPage = () => {

//   const { addToCart, removeFromCart, cart } = useCart();

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <NavBar />

//       {/* Main content */}
//       <main className="flex-grow container mx-auto px-4 py-28">
//         <h1 className="text-4xl font-bold text-center mb-12">Shop Our Products</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                 <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
//                 <p className="text-lg text-gray-700 mb-4">${product.price.toFixed(2)}</p>
//                 <button
//                   onClick={() => addToCart(product)}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default ShopPage;
// src/pages/ShopPage.js
// src/pages/ShopPage.js
import React from 'react';
import { useCart } from '../context/CartContext';  // Access the cart context
import { products } from '../data/products';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ShopPage = () => {
  const { addToCart, removeFromCart, cart } = useCart();  // Destructure the cart context

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-28">
        <h1 className="text-4xl font-bold text-center mb-12">Shop Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                <p className="text-lg text-gray-700 mb-4">${product.price.toFixed(2)}</p>
                {cart.find((item) => item.id === product.id) ? (
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700 transition-colors"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShopPage;