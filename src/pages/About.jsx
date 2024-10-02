// src/pages/AboutPage.js
import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import "tailwindcss/tailwind.css";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Card-like Structure */}
          <div className="bg-white shadow-lg rounded-lg p-8 transition-all duration-300">
            <h1 className="text-4xl font-bold text-center mb-12 text-blue-900">
              Where Our Coffee Is Grown
            </h1>

            <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
              {/* Coffee Growing Info */}
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Our coffee is grown in the lush, mountainous regions of
                  Colombia, known for producing some of the highest-quality
                  coffee beans in the world. The unique climate and rich soil
                  provide the perfect environment for coffee cultivation,
                  resulting in beans that have a distinct, full-bodied flavor
                  and aroma.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We work directly with local farmers to ensure sustainable
                  farming practices and fair trade conditions. Every cup of
                  coffee you drink from us supports these hardworking
                  communities and promotes environmentally friendly methods.
                </p>
              </div>

              {/* Coffee Growing Image */}
              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 transform transition-transform duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/21555029/pexels-photo-21555029/free-photo-of-branches-with-robusta-coffee-beans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Coffee Farm"
                  className="rounded-lg shadow-md w-full h-64 object-cover lg:h-80"
                />
              </div>
            </div>

            {/* Additional Content Block with Smooth Transition */}
            <div className="mt-16 flex flex-col lg:flex-row-reverse items-center lg:space-x-reverse lg:space-x-8">
              {/* More Info */}
              <div className="lg:w-1/2">
                <p className="text-lg text-gray-700 mb-6">
                  Our beans are handpicked and carefully processed to maintain
                  their natural flavor profile. The high-altitude farms give our
                  coffee its characteristic acidity, balancing the sweetness
                  with a pleasant crispness.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We are proud to provide coffee that is not only delicious but
                  also ethically sourced, bringing you the best taste while
                  contributing to a sustainable future.
                </p>
              </div>

              {/* Another Image */}
              <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0 transform transition-transform duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/7125592/pexels-photo-7125592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Coffee Beans"
                  className="rounded-lg shadow-md w-full h-64 object-cover lg:h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage;