import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold">Fonderie Drean</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-amber-400 transition duration-300">الرئيسية</Link>
            <Link to="/about" className="hover:text-amber-400 transition duration-300">من نحن</Link>
            <Link to="/products" className="hover:text-amber-400 transition duration-300">منتجاتنا</Link>
            <Link to="/manufacturing" className="hover:text-amber-400 transition duration-300">عملية التصنيع</Link>
            <Link to="/contact" className="hover:text-amber-400 transition duration-300">اتصل بنا</Link>
          </div>
          <div className="md:hidden">
            <button className="focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
