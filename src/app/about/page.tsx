import { getPhotos } from '@/api';
import AboutImage from '@/components/AboutImage';
import { ROUTE_PORTFOLIO } from '@/routes/routes';
import Link from 'next/link';

const data = [
  {
    key: 'high',
    value: `5'9¾" / 177 cm`
  },
  {
    key: 'biust',
    value: '32.5" / 83 cm'
  },
  {
    key: 'waist',
    value: '23.5" / 60 cm'
  },
  {
    key: 'hips',
    value: '35.5" / 90 cm'
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
    key: 'shoes',
    value: '5 UK / 38 EU / 7 US'
  }
];

export default async function About() {
  const photos = await getPhotos();

  return (
    <main className="bg-white lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]">
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2 md:gap-10 gap-4 py-3 px-5 lg:p-2.5 h-full">
        <div className="lg:max-h-[calc(100dvh-84px)] h-full flex flex-col items-center lg:justify-center md:gap-10 gap-4 py-3 lg:py-10">
          <h1 className="text-4xl lg:text-5xl hidden lg:block font-georgia uppercase text-center font-bold">
            Anna Kobzar
          </h1>
          <div className="gap-4 grid grid-cols-1 grid-rows-[1fr_auto] lg:grid-cols-2 lg:flex lg:flex-col w-fit mx-auto items-start justify-center">
            {data.map((i) => (
              <div className="uppercase font-bold text-xl" key={i.key}>
                {i.key}: {i.value}
              </div>
            ))}
          </div>
        </div>
        <div className="h-full flex items-center justify-center appearBlock overflow-hidden relative">
          <AboutImage photos={photos} />
          <Link href={ROUTE_PORTFOLIO} className="absolute inset-0 lg:hidden" />
        </div>
        {/* <div
          className="col-span-2 w-8/12 instFrame mx-auto"
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://2a808c6e543d4552bcffa0f2c931ba7b.elf.site" width="100%" height="600"></iframe>`
          }}
        /> */}
      </div>
    </main>
  );
}
