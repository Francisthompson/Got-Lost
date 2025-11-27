import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Left side: Logo + Title */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src="/assets/GlOwlRed.svg"
            alt="Mascot Logo"
            className="w-12 h-12 object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Title */}
          <Link href="/" className="text-2xl font-bold text-white">
            Got Lost?
          </Link>
        </div>
        
        {/* Navigation links (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-200 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/explore" className="text-gray-200 hover:text-white transition-colors">
            Explore Campus
          </Link>
          <Link href="/about" className="text-gray-200 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/settings" className="text-gray-200 hover:text-white transition-color">
            Settings
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-gray-200 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;