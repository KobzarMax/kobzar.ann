import { getPhotos } from '@/api';
import AboutImage from '@/components/AboutImage';
import Footer from '@/components/Footer';
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
      <div className="flex flex-col h-full justify-between">
        <div className="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-2 md:gap-10 gap-4 pt-3 px-5 lg:p-2.5 lg:pb-0 h-full">
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
          <div className="h-full max-h-[75vh] min-h-[500px] flex items-center justify-center appearBlock overflow-hidden relative">
            <AboutImage photos={photos} />
            <Link
              href={ROUTE_PORTFOLIO}
              className="absolute inset-0 lg:hidden"
            />
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 p-2.5">
          <InstagramEmbed url="https://www.instagram.com/p/DJUSGNYoQuw" />
          <InstagramEmbed url="https://www.instagram.com/p/DJURn3jI9gE" />
          <InstagramEmbed url="https://www.instagram.com/p/DD-guKwIAhy" />
          <InstagramEmbed url="https://www.instagram.com/p/DBz08AYoxrA" />
          <InstagramEmbed url="https://www.instagram.com/p/DByv_XRIxgA" />
          <InstagramEmbed url="https://www.instagram.com/p/C-06gr9MWUL" />
          <InstagramEmbed url="https://www.instagram.com/p/C-DUyejM8dY" />
          <InstagramEmbed url="https://www.instagram.com/p/C90TWYUsuMi" />
          <InstagramEmbed url="https://www.instagram.com/p/C6CV1z2s4eM" />
          <InstagramEmbed url="https://www.instagram.com/p/C5oqqo_MBr6" />
          <InstagramEmbed url="https://www.instagram.com/p/C5gOiKpMqnf" />
          <InstagramEmbed url="https://www.instagram.com/p/CuM_tVFrM28" />
          <InstagramEmbed url="https://www.instagram.com/p/CtreCLRMP_s" />
          <InstagramEmbed url="https://www.instagram.com/p/CrBkLSnIpb_" />

          <InstagramEmbed url="https://www.instagram.com/p/CoArbJbsc-B" />
          <InstagramEmbed url="https://www.instagram.com/p/CmKKcBhMz90" />
          <InstagramEmbed url="https://www.instagram.com/p/CinwRKVOOgL" />
          <InstagramEmbed url="https://www.instagram.com/p/CdOfqBalvzX" />
          <InstagramEmbed url="https://www.instagram.com/p/CdFu3FLMXID" />
          <InstagramEmbed url="https://www.instagram.com/p/CcAvksDMFpk" />
          <InstagramEmbed url="https://www.instagram.com/p/CaHPdO0scns" />
          <InstagramEmbed url="https://www.instagram.com/p/CZRYD2UsRt" />
          <InstagramEmbed url="https://www.instagram.com/p/CZEQC-FMxTI" />
          <InstagramEmbed url="https://www.instagram.com/p/CXEBOn3MafY" />

          <InstagramEmbed url="https://www.instagram.com/p/CR0qAK6suvQ" />
          <InstagramEmbed url="https://www.instagram.com/p/CL2jllbMmYm" />
          <InstagramEmbed url="https://www.instagram.com/p/CKiyHHBMrLE" />
          <InstagramEmbed url="https://www.instagram.com/p/CHVhGhpst9C" />
          <InstagramEmbed url="https://www.instagram.com/p/B_b6iiAgM9R" />
          <InstagramEmbed url="https://www.instagram.com/p/B9_jrcDg6bp" />
          <InstagramEmbed url="https://www.instagram.com/p/B6gq_j3A2ZI" />

          <InstagramEmbed url="https://www.instagram.com/p/B3YxMV6AkSu" />
          <InstagramEmbed url="https://www.instagram.com/p/B3Pl1cjoMMF" />
          <InstagramEmbed url="https://www.instagram.com/p/B3OXsRthc_0" />
          <InstagramEmbed url="https://www.instagram.com/p/B2BzhkzohmR" />
          <InstagramEmbed url="https://www.instagram.com/p/B1mDYbaoafK" />
          <InstagramEmbed url="https://www.instagram.com/p/BySPkRug8PV" />
          <InstagramEmbed url="https://www.instagram.com/p/BwhB0OMgljD" />
          <InstagramEmbed url="https://www.instagram.com/p/BudZcvbo8WA" />

          <InstagramEmbed url="https://www.instagram.com/p/Bq2cRtth8o5" />
          <InstagramEmbed url="https://www.instagram.com/p/Bk8W9Z4H55j" />
          <InstagramEmbed url="https://www.instagram.com/p/Bh_bzCAnOMy" />
          <InstagramEmbed url="https://www.instagram.com/p/BhrxMFLHml1" />
          <InstagramEmbed url="https://www.instagram.com/p/Bgs06L_BqvH" />
          <InstagramEmbed url="https://www.instagram.com/p/Ba9OKnJDWtC" />
          <InstagramEmbed url="https://www.instagram.com/p/BVZN0p-DWSn" />
          <InstagramEmbed url="https://www.instagram.com/p/BVFfIxIjv2-" />

          <InstagramEmbed url="https://www.instagram.com/p/BUjiLPXjMpu" />
          <InstagramEmbed url="https://www.instagram.com/p/BUh5WnDDanb" />
        </div> */}
        <Footer />
      </div>
    </main>
  );
}
