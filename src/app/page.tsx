import { getPhotos } from '@/api';
import { ROUTE_ABOUT, ROUTE_PORTFOLIO } from '@/routes/routes';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const photos = await getPhotos();

  const randomPhotoIndexOne = Math.floor(Math.random() * photos.length);
  const randomPhotoIndexTwo = Math.floor(Math.random() * photos.length);

  const randomPhotoOne = photos[randomPhotoIndexOne];
  const randomPhotoTwo = photos[randomPhotoIndexTwo];

  if (randomPhotoOne && randomPhotoTwo)
    return (
      <main className="bg-mainColor lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]">
        <div className="grid grid-rows-2 lg:grid-cols-2">
          <div className="max-h-[calc(100dvh-84px)] relative">
            <Image
              fill
              sizes="100vw"
              loading="lazy"
              className="max-h-[calc(100dvh-84px)] object-center object-cover"
              style={{ width: '100%', height: 'auto' }}
              src={randomPhotoOne.url}
              alt={randomPhotoOne.name}
            />
            <Link className="inset-0 absolute mainLink" href={ROUTE_ABOUT}>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[12.5%]">
                <div className="px-3 b py-3 relative">
                  <span className="uppercase text-white text-[2.188rem] font-bold">
                    about
                  </span>
                  <span className="linkDecoration bg-white absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </div>
          <div className="max-h-[calc(100dvh-84px)] relative">
            <Image
              fill
              sizes="100vw"
              loading="lazy"
              className="max-h-[calc(100dvh-84px)] object-center object-cover"
              style={{ width: '100%', height: 'auto' }}
              src={randomPhotoTwo.url}
              alt={randomPhotoTwo.name}
            />
            <Link className="inset-0 absolute mainLink" href={ROUTE_PORTFOLIO}>
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[12.5%]">
                <div className="px-3 b py-3 relative">
                  <span className="uppercase text-white text-[2.188rem] font-bold">
                    portfolio
                  </span>
                  <span className="linkDecoration bg-white absolute bottom-0 left-1/2 -translate-x-1/2 h-[0.1875rem] w-[1.875rem] opacity-0 transition-all duration-300" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </main>
    );
}
