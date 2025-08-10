import React from "react";
import { Link } from "react-router";
import { FaUtensils, FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b to-[#f5ebfe] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Animated 404 text */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-gray-800 opacity-10">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <FaUtensils className="text-6xl text-amber-500 mx-auto mb-4 animate-bounce" />
              <h2 className="text-4xl font-bold text-gray-800 mb-2">Recipe Not Found</h2>
              <p className="text-lg text-gray-600">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
          </div>
        </div>

        {/* Food illustration */}
        <div className="relative mb-10">
          <div className="w-64 h-64 mx-auto bg-amber-100 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
              alt="Missing food"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-md">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <span className="text-xl font-bold">?</span>
              </div>
            </div>
          </div>
        </div>

        {/* Suggested actions */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">
            Here's what you can do:
          </h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-600">
            <li className="flex items-center">
              <span className="bg-amber-100 text-orange-400 rounded-full p-2 mr-2">
                1
              </span>
              Check the URL for typos
            </li>
            <li className="flex items-center">
              <span className="bg-amber-100 text-orange-400 rounded-full p-2 mr-2">
                2
              </span>
              Browse our delicious recipes
            </li>
            <li className="flex items-center">
              <span className="bg-amber-100 text-orange-400 rounded-full p-2 mr-2">
                3
              </span>
              Try searching instead
            </li>
          </ul>
        </div>

        {/* Home button */}
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-orange-400 hover:bg-amber-600 text-white font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <FaHome className="mr-2" />
          Return to Home
        </Link>

        {/* Footer note */}
        <p className="mt-8 text-sm text-gray-500">
          Hungry for more? Explore our <Link to="/all-foods" className="text-orange-400 hover:underline">featured recipes</Link>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;