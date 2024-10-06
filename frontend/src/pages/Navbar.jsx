import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#DBE4EE] flex items-center justify-between w-full py-5 space-x-12">
      <div className="pl-20 text-2xl font-bold">Example</div>
      <div>
        <ul className="flex space-x-6">
          <Link to="/">HOME</Link>
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link to="/shop">SHOP</Link>
            {/* When dropdown menu is open */}
            {isDropdownOpen && (
              <div className="absolute left-0 h-52 -translate-x-1/2">
                <div className="flex items-center justify-around space-x-12 bg-slate-500 p-10 mt-6">
                  <div>
                    <Link to="/shop/men" className="font-semibold">MEN</Link>
                    <p>Clothes for men above 18 age</p>
                  </div>
                  <div>
                    <Link to="/shop/women" className="font-semibold">WOMEN</Link>
                    <p>Clothes for women above 18 age</p>
                  </div>
                  <div>
                    <Link to="/shop/boys" className="font-semibold">BOYS</Link>
                    <p>Clothes for boys under 18 age</p>
                  </div>
                  <div>
                    <Link to="/shop/girls" className="font-semibold">GIRLS</Link>
                    <p>Clothes for girls under 18 age</p>
                  </div>
                  <div>
                    <Link to="/shop/sale" className="font-semibold">SALE</Link>
                    <p>Get the best sale offers</p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/wishlist">WISHLIST</Link>
          <Link to="/cart">CART</Link>
        </ul>
      </div>
      <div className="pr-20">
        <button className="rounded-full bg-slate-700 text-white px-6 py-2">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
