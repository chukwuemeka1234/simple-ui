import { Icon } from '@iconify/react';
import Image from 'next/image';
import home from '../public/assets/Home_fill.svg';
import explore from '../public/assets/Gps_fixed_fill.svg';
import profile from '../public/assets/User_alt_fill.svg';
import notifications from '../public/assets/Bell_pin_fill.svg';
import wallet from '../public/assets/Wallet_fill.svg';
import circle from '../public/assets/User_fill_add.svg';
import verified from '../public/assets/Check_round_fill.svg';
import settings from '../public/assets/Setting_alt_fill.svg';

import { SideNavItem } from './types';
import { BottomNavItem } from './types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Image src={home} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <Image src={explore} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: <Image src={profile} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Notifications',
    path: '/notifications',
    icon: <Image src={notifications} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <Image src={wallet} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Your Circle',
    path: '/yourcircle',
    icon: <Image src={circle} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Get Verified',
    path: '/getverified',
    icon: <Image src={verified} alt="Settings image" width={30} height={30} />,
  },
  {
    title: 'Settings',
    path: '/settings',
    icon: <Image src={settings} alt="Settings image" width={30} height={30} />,
  },
];

export const BOTTOMNAV_ITEMS: BottomNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Image src={home} alt="Settings image" width={24} height={24} />,
  },
  {
    title: 'Explore',
    path: '/explore',
    icon: <Image src={explore} alt="Settings image" width={24} height={24} />,
  },
  {
    title: 'Wallet',
    path: '/wallet',
    icon: <Image src={wallet} alt="Settings image" width={24} height={24} />,
  },
  {
    title: 'Your Circle',
    path: '/yourcircle',
    icon: <Image src={circle} alt="Settings image" width={24} height={24} />,
  },
];