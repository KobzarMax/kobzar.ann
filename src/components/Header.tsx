import Link from 'next/link';
import { ROUTE_HOME } from '@/routes/routes';
import Image from 'next/image';
import { instagram, tiktok, whatsapp } from '@/static/icons';

export default function Header() {
  return (
    <header
      id="header"
      className={`py-6 px-10 bg-white sticky top-0 z-50 w-full`}
    >
      <div
        className={`h-fit px-3 md:flex-row flex-col gap-4 flex items-center justify-between`}
      >
        <Link
          className={`text-textColor font-bold mx-auto font-georgia text-3xl uppercase`}
          href={ROUTE_HOME}
        >
          Anna Kobzar
        </Link>
        <div className={`gap-4 flex items-center justify-between`}>
          <Link
            className={`text-textColor text-3xl`}
            target={`_blank`}
            href={`https://www.instagram.com/kobzar.ann`}
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
            href={`https://wa.me/+447555842463`}
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
            href={`https://www.tiktok.com/@kobzar.ann?_t=ZM-8yM2owVxRTx&_r=1`}
          >
            <Image
              width={20}
              height={16}
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
