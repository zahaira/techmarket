import { Link } from "@/i18n/navigation";
import React from "react";
import { FaSearch } from "react-icons/fa";

const NotFound = ({ messages }: { messages: Record<string, string> }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <FaSearch className="text-primary-dark text-6xl mb-6 animate-bounce" />
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3">
        {messages.title}
      </h2>
      <p className="text-gray-600 mb-6">{messages.description}</p>
      <Link
        href="/"
        className="bg-primary-dark text-white px-6 py-3 rounded-full hover:bg-primary-main transition"
      >
        {messages.backHome}
      </Link>
    </div>
  );
};

export default NotFound;
