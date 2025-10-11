import React from "react";
import { BiStar } from "react-icons/bi";

const BestSellerBadge = () => {
  return (
    <div className="flex items-center gap-1 text-black font-semibold py-1 w-max">
      <BiStar className="w-5 h-5 fill-yellow-400" />
      <span>Best Seller</span>
    </div>
  );
};

export default BestSellerBadge;
