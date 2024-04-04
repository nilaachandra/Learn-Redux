import React from "react";
import { Link } from "react-router-dom";
import { RiDashboard2Fill, RiShoppingCartFill } from "@remixicon/react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart);
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link to="/" className="text-white text-xl font-bold">
            XYZ Shop
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/cartpage" className="text-gray-300 hover:text-white mr-4 relative">
            <RiShoppingCartFill size={30} />
            <span className="absolute h-6 w-6 flex items-center justify-center bg-red-600 text-white font-bold rounded-full -top-2 left-4" >{cartCount.length}</span>
          </Link>
          <Link to="/dashboard" className="text-gray-300 hover:text-white mr-4">
            <RiDashboard2Fill size={30} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
