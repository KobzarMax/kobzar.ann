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
      <main className="bg-mainColor lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]s">
        <div className="grid grid-rows-2 lg:grid-cols-2">
          <div className="max-h-[calc(100dvh-84px)] relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="max-h-[calc(100dvh-84px)] object-cover"
              style={{ width: '100%', height: 'auto' }}
              src={randomPhotoOne.url}
              alt={randomPhotoOne.name}
            />
            <Link className="inset-0 absolute" href={ROUTE_ABOUT}>
              <span className="uppercase absolute left-1/2 -translate-x-1/2 bg-black text-white bottom-[12.5%] text-3xl font-bold px-4 b py-3">
                about
              </span>
            </Link>
          </div>
          <div className="max-h-[calc(100dvh-84px)] relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="max-h-[calc(100dvh-84px)] object-cover"
              style={{ width: '100%', height: 'auto' }}
              src={randomPhotoTwo.url}
              alt={randomPhotoTwo.name}
            />
            <Link className="inset-0 absolute" href={ROUTE_PORTFOLIO}>
              <span className="uppercase absolute left-1/2 -translate-x-1/2 bg-black text-white bottom-[12.5%] text-3xl font-bold px-4 b py-3">
                portfolio
              </span>
            </Link>
          </div>
        </div>
      </main>
    );
}
