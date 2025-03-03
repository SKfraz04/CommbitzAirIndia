import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      {/* Top banner */}
      <div className="w-full bg-[#FDF5F3] py-2">
        <p className="text-center italic font-bold text-[#202020]">Connectivity made easy!</p>
      </div>
      
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo section */}
        <div className="flex items-center space-x-2">
          {/* First logo */}
          <div className="relative w-[340px] h-[40px]">
            <Image 
              src="/Images/Logo.png"
              alt="Commibitz Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-8">
          <Link 
            href="/esim" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            eSIM
          </Link>
          <Link 
            href="/faqs" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            FAQ&apos;s
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-gray-900 font-medium"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
