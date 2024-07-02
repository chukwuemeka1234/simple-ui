'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import useScroll from '@/hooks/use-scroll';

const MobileHeader = () => {
  const scrolled = useScroll(5);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div
      className={`sticky inset-x-0 top-0 z-30 w-full transition-all border-b ${
        scrolled
          ? 'border-gray-200 bg-white/75 backdrop-blur-lg'
          : 'border-gray-200 bg-white'
      }`}
    >
      <div className="flex flex-col items-center px-5 py-3 space-y-4">
        {/* Search Bar */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded-3xl bg-gray-300"
          />
        </div>

        {/* Categories Button with Dropdown */}
        <div className="relative w-full">
          <button
            onClick={toggleDropdown}
            className="flex w-34 px-4 py-2 bg-gray-300 text-zinc-900 rounded-xl"
          >
            Categories <Icon icon="iconamoon:arrow-down-2-duotone" width="20" height="20" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
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
      </div>
    </div>
  );
};

export default MobileHeader;
