import { getPhotos } from '@/api';
import AboutImage from '@/components/AboutImage';

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
    <main className="bg-white">
      <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 md:gap-10 gap-4 py-3 px-5 lg:p-10 h-full">
        <div className="lg:max-h-[calc(100dvh-84px)] h-full flex flex-col items-center lg:justify-center md:gap-10 gap-4 py-3 lg:py-10">
          <h1 className="text-5xl font-georgia uppercase text-center font-bold">
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
        <div className="h-full overflow-hidden relative">
          <AboutImage photos={photos} />
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
