// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { products } from "../data/products";
import { useCart } from "../context/CartContext"; // Import the useCart hook

const HomePage = () => {
  const { addToCart, removeFromCart, cart } = useCart(); // Access cart context

  return (
    <div className="min-h-screen bg-blue-50 text-white">
      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Section */}
      <main>
        <section
          className="py-40 text-center bg-cover bg-center mt-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/683039/pexels-photo-683039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        >
          <h1 className="text-5xl font-bold mt-6 mb-6 text-white drop-shadow-lg">
            Discover the Perfect Brew
          </h1>
          <p className="text-xl mb-8 text-white">
            From premium coffee beans to state-of-the-art machines, we've got
            your caffeine needs covered.
          </p>
          <Link
            to="/shop"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </Link>
        </section>

        {/* Infinite Moving Cards */}
        <section className="py-10 bg-white overflow-hidden">
          <div className="relative flex items-center justify-center h-64">
            <div className="absolute flex animate-scroll-left space-x-6">
              {/* Render the cards twice for seamless looping */}
              {[
                "https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/4050463/pexels-photo-4050463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              ].map((src, index) => (
                <div key={index} className="w-80 h-64 flex-shrink-0">
                  <div
                    className="w-full h-full bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                </div>
              ))}
              {/* Duplicating cards for seamless effect */}
              {[
                "https://images.pexels.com/photos/2711959/pexels-photo-2711959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/4050463/pexels-photo-4050463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              ].map((src, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="w-80 h-64 flex-shrink-0"
                >
                  <div
                    className="w-full h-full bg-cover bg-center rounded-md"
                    style={{ backgroundImage: `url(${src})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <style jsx>{`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 20s linear infinite;
          }
        `}</style>

        {/* Featured Products */}
        <section className="pb-8 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-blue-100 p-6 rounded-lg shadow-md"
                >
                  <div className="w-full h-64 bg-blue-300 rounded-md mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>

                  {cart.find((cartItem) => cartItem.id === item.id) ? (
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose BrewMaster */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose BrewMaster?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p>We source only the finest coffee beans and equipment.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Expert Knowledge</h3>
                <p>Our team is passionate about coffee and here to help.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                <p>Get your coffee fix quickly with our speedy delivery.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coffee Club Subscription */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Coffee Club</h2>
            <p className="text-xl mb-8">
              Subscribe for exclusive deals, brewing tips, and more!
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HomePage;