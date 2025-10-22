import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">GL</span>
          </div>
          <Link href="/" className="text-xl font-bold text-gray-800">
            Got Lost?
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/explore" className="text-gray-600 hover:text-primary transition-colors">
            Explore Campus
          </Link>
          <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">
            About
          </Link>
        </div>
        
        <button className="md:hidden p-2 text-gray-600 hover:text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
