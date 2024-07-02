'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BOTTOMNAV_ITEMS } from '@/constants';
import { BottomNavItem } from '@/types';
import { motion } from 'framer-motion';

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate="open"
      custom={height}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 w-full md:hidden"
      ref={containerRef}
    >
      <motion.ul
        variants={variants}
        className="flex justify-around px-5 py-3 overflow-x-auto"
      >
        {BOTTOMNAV_ITEMS.map((item, idx) => (
          <MenuItem key={idx} item={item} pathname={pathname} />
        ))}
      </motion.ul>
    </motion.nav>
  );
};

export default HeaderMobile;

const MenuItem = ({
  item,
  pathname,
}: {
  item: BottomNavItem;
  pathname: string;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className="flex flex-col items-center">
      <Link href={item.path} className={`text-center ${item.path === pathname ? 'font-bold' : ''}`}>
        {item.icon}
        <span className="text-xs">{item.title}</span>
      </Link>
    </motion.li>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
