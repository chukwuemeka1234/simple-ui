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
    <div className="w-60 bg-slate-50 h-screen flex-1 fixed border-r border-zinc-200 hidden md:flex">
      <div className="flex flex-col w-full p-2 pt-10">
        <div className="flex flex-col pt-2">
          {SIDENAV_ITEMS.map((item, idx) => {
            return <MenuItem key={idx} item={item} pathname={pathname} />;
          })}
        </div>
        <div className="flex flex-col items-center pb-10 mt-auto mb-8">
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ item, pathname }: { item: SideNavItem; pathname: string }) => {
  const isActive = item.path === pathname;
  return (
    <Link
      href={item.path}
      className={`flex flex-row space-x-4 items-center p-4 hover:bg-zinc-200 ${
        isActive ? 'bg-zinc-200' : ''
      }`}
    >
      {item.icon}
      <span className={`font-light text-base flex pt-1 ${isActive ? 'text-xl font-extrabold' : ''}`}>{item.title}</span>
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
      className="flex items-center justify-center p-3 px-5 rounded-lg bg-red-400 text-white"
    >
      <Icon icon="ph:arrow-line-left-bold" width="20" height="20" />
      <span className="font-light text-sm px-2 flex">Log Out</span>
    </button>
  );
};

export default SideNav;
