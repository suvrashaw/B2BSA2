"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import * as React from 'react';

export type IMenu = {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: IMenu[];
};

type MenuProps = {
  list: IMenu[];
};

export const AnimatedNavbar = ({ list }: MenuProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-2xl">
        <MotionConfig transition={{ bounce: 0, type: 'tween' }}>
          <nav className={'relative'}>
            <ul className={'flex items-center gap-2'}>
              {list?.map((item) => {
                return (
                  <li key={item.id} className={'relative'}>
                    <Link
                      className={`
                        relative flex items-center justify-center rounded-full px-6 py-2 transition-colors duration-300
                        text-sm font-medium tracking-wide
                        ${hovered === item?.id ? 'text-black' : 'text-white/80 hover:text-white'}
                      `}
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                      href={item?.url}
                    >
                      <span className="relative z-10">{item?.title}</span>
                      
                      {hovered === item?.id && (
                        <motion.div
                          layoutId={`nav-cursor`}
                          className={'absolute inset-0 bg-white rounded-full z-0'}
                          transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                        />
                      )}
                    </Link>
                    
                    {item?.dropdown && hovered === item?.id && (
                      <div
                        className='absolute left-1/2 -translate-x-1/2 top-full pt-4'
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className='flex w-48 flex-col rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden shadow-2xl p-2'
                        >
                          {item?.items?.map((nav) => {
                            return (
                              <Link
                                key={`link-${nav?.id}`}
                                href={`${nav?.url}`}
                                className={'w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors'}
                              >
                                {nav?.title}
                              </Link>
                            );
                          })}
                        </motion.div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </MotionConfig>
      </div>
    </div>
  );
};
