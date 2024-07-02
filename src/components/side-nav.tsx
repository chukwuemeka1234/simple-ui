'use client';

import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SIDENAV_ITEMS } from '@/constants';
import { SideNavItem } from '@/types';
import { Icon } from '@iconify/react';

const SideNav = () => {
  const pathname = usePathname();

  return (
    <div className="md:w-60 bg-white h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col w-full p-2 pt-24">
        <div className="flex flex-col">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} pathname={pathname} />;
          })}
        </div>
        <div className="flex flex-col items-center mt-auto mb-8">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ item, pathname }: { item: SideNavItem; pathname: string }) => {
  return (
    <Link
      href={item.path}
      className={`flex flex-row space-x-4 items-center p-2 hover:bg-zinc-100 ${
        item.path === pathname ? 'bg-zinc-100' : ''
      }`}
    >
      {item.icon}
      <span className="font-semibold text-xl flex">{item.title}</span>
    </Link>
  );
};

const LogoutButton = () => {
  // Replace with actual logout functionality
  const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex w-full items-center justify-center p-2 rounded-lg bg-red-500 text-white"
    >
      <Icon icon="ph:arrow-line-left-bold" width="20" height="20" />
      <span className="font-semibold text-xl flex">Logout</span>
    </button>
  );
};

export default SideNav;
