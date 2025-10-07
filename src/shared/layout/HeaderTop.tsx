import Link from "next/link";
import React from "react";
import { FiUser } from "react-icons/fi";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block sm:ml-[70px]">
      <div className="container mx-auto  py-3 px-4">
        <div className="flex justify-between items-center">
          <div className="text-gray-500 text-[12px] hover:text-gray-800 transition-colors duration-200">
            <Link href="#">Contact-us</Link>
          </div>
          <div className="flex gap-4 items-center">
            <select
              className="text-gray-500 text-[12px] bg-white w-[70px] hover:text-gray-800 transition-colors duration-200"
              name="language"
              id="language"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
            <div className="text-gray-500">|</div>
            <Link
              href="#"
              className="flex gap-1 items-center text-gray-500 text-[12px] hover:bg-gray-100 hover:rounded-2xl py-1 px-2 hover:text-gray-800 transition-colors duration-200"
            >
              <FiUser />
              Login / Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
