import Link from 'next/link';
import { ROUTE_HOME } from '@/routes/routes';
import Image from 'next/image';
import {
  facebook,
  instagram,
  telegram,
  tiktok,
  whatsapp
} from '@/static/icons';

export default function Header() {
  return (
    <header id="header" className={`py-6 px-10 bg-white z-50 w-full`}>
      <div
        className={`h-fit px-3 md:flex-row flex-col gap-4 flex items-center justify-between`}
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
            <Image
              width={24}
              height={24}
              loading="lazy"
              src={instagram}
              alt={'instagram'}
            />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <Image
              width={24}
              height={24}
              loading="lazy"
              src={whatsapp}
              alt={'whatsapp'}
            />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <Image
              width={24}
              height={24}
              loading="lazy"
              src={telegram}
              alt={'telegram'}
            />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <Image
              width={24}
              height={24}
              loading="lazy"
              src={facebook}
              alt={'facebook'}
            />
          </Link>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/cutiekite/`}
          >
            <Image
              width={24}
              height={20}
              loading="lazy"
              src={tiktok}
              alt={'tiktok'}
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
