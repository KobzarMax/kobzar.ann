'use client';

import { ROUTE_HOME } from '@/routes/routes';
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function ScrollFooter() {
  const [headerView, setHeaderView] = useState<boolean>(false);
  const ref = useRef(null);
  useEffect(() => {
    function handleScroll() {
      const scrolledContentHeight = window.scrollY > 250;
      if (scrolledContentHeight) {
        setHeaderView(true);
      } else {
        setHeaderView(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute w-full bottom-0 ${headerView ? 'scrolled shadow-sm' : ''} [.scrolled&]:py-3 [.scrolled&]:bg-white/30`}
    >
      <div
        className={`h-fit px-3 large:flex-wrap gap-4 flex items-center justify-between`}
      >
        <Link
          className={`text-textColor font-bold text-3xl italic`}
          href={ROUTE_HOME}
        >
          Anna Kobzar
        </Link>
        <div className={`gap-4 flex items-center justify-between`}>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <FontAwesomeIcon icon={faWhatsapp} />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <FontAwesomeIcon icon={faTelegram} />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
      </div>
    </div>
  );
}
