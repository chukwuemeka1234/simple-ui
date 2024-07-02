import { IconifyIcon } from '@iconify/react';

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};

export type BottomNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
}