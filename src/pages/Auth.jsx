import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form>
            {!isLogin && (
              <input
                className="w-full mb-4 p-3 border border-gray-300 rounded"
                type="text"
                placeholder="Name"
              />
            )}
            <input
              className="w-full mb-4 p-3 border border-gray-300 rounded"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full mb-4 p-3 border border-gray-300 rounded"
              type="password"
              placeholder="Password"
            />
            <button className="w-full px-4 py-2 bg-blue-900 text-white rounded">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 ml-2"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth;
