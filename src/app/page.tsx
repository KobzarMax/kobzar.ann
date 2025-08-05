import { fetchRandomImage } from '@/actions/r2-actions';
import VerticalRandomPhoto from '@/components/VerticalImage';
import { ROUTE_ABOUT, ROUTE_PORTFOLIO } from '@/routes/routes';
import Link from 'next/link';

export default async function Home() {
  const { image: fetchedImageOne } = await fetchRandomImage();
  const { image: fetchedImageTwo } = await fetchRandomImage();

  return (
    <main className="bg-white lg:overflow-hidden lg:h-[calc(100dvh-84px)] lg:max-h-[calc(100dvh-84px)]">
      <div className="grid grid-rows-[auto_auto] h-full -space-y-0.5 lg:space-y-0 lg:grid-rows-1 lg:grid-cols-2">
        <div className="max-h-[calc(100dvh-84px)] relative">
          <VerticalRandomPhoto randomPhoto={fetchedImageOne} />
          <Link
            className="inset-0 absolute outline-none mainLink"
            href={ROUTE_ABOUT}
          >
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
          <VerticalRandomPhoto randomPhoto={fetchedImageTwo} />
          <Link
            className="inset-0 absolute outline-none mainLink"
            href={ROUTE_PORTFOLIO}
          >
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
