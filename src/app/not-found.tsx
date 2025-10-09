import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <FaSearch className="text-primary-dark text-6xl mb-6 animate-bounce" />
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for might have been moved, deleted, or doesn’t
        exist anymore.
      </p>
      <Link
        href="/"
        className="bg-primary-dark text-white px-6 py-3 rounded-full hover:bg-primary transition"
      >
        Retour à l’accueil
      </Link>
    </div>
  );
};

export default NotFound;
