'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import useScroll from '@/hooks/use-scroll';
import { Icon } from '@iconify/react';
import MobileHeader from './MobileHeader'; // Import the mobile header component

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <div
        className={`hidden md:block sticky inset-x-0 top-0 z-30 w-full transition-all border-b ${
          scrolled
            ? 'border-gray-200 bg-white/75 backdrop-blur-lg'
            : selectedLayout
            ? 'border-gray-200 bg-white'
            : 'border-gray-200'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3">
          {/* Left Side - Categories Button with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center px-4 py-2 bg-gray-300 text-zinc-900 rounded-xl"
            >
              Categories <Icon icon="iconamoon:arrow-down-2-duotone" width="20" height="20" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Category 1
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Category 2
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Category 3
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Right Side - Search Bar */}
          <div className="flex items-center w-1/4">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 border rounded-3xl bg-gray-300"
            />
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="block md:hidden">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
