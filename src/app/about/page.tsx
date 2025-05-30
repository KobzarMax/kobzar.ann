import { getPhotos } from '@/api';
import Image from 'next/image';

export default async function About() {
  const photos = await getPhotos();

  const randomPhotoIndexOne = Math.floor(Math.random() * photos.length);

  const randomPhotoOne = photos[randomPhotoIndexOne];

  const data = [
    {
      key: 'high',
      value: '177'
    },
    {
      key: 'biust',
      value: '83'
    },
    {
      key: 'waist',
      value: '60'
    },
    {
      key: 'hips',
      value: '90'
    },
    {
      key: 'eyes',
      value: 'brown'
    },
    {
      key: 'hair',
      value: 'brown'
    },
    {
      key: 'shoes size',
      value: '38'
    }
  ];

  if (!!randomPhotoOne)
    return (
      <main className="bg-mainColor lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]s">
        <div className="grid grid-rows-2 lg:grid-cols-2 md:gap-10 gap-4 py-3 px-5 lg:p-10 h-full">
          <div className="lg:max-h-[calc(100dvh-84px)] h-full relative">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              loading="lazy"
              className="lg:max-h-[99%] object-center md:absolute inset-0 object-cover"
              style={{ width: '100%', height: 'auto' }}
              src={randomPhotoOne.url}
              alt={randomPhotoOne.name}
            />
          </div>
          <div className="lg:max-h-[calc(100dvh-84px)] h-full flex flex-col items-center lg:justify-center md:gap-10 gap-4 py-3 lg:py-10">
            <h1 className="text-5xl uppercase text-center font-bold">
              Anna Kobzar
            </h1>
            <div className="gap-4 grid grid-cols-2 lg:flex lg:flex-col w-fit mx-auto items-start justify-center">
              {data.map((i) => (
                <div className="uppercase font-bold text-xl" key={i.key}>
                  {i.key}: {i.value}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    );
}
