import Link from 'next/link';
import { ROUTE_HOME } from '@/routes/routes';

export default function NotFound() {
  return (
    <main className="bg-white">
      <div className="grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-1 md:gap-10 gap-4 py-3 px-5 lg:p-2.5 h-full">
        <div className="lg:max-h-[calc(100dvh-84px)] h-full flex flex-col items-center lg:justify-center md:gap-10 gap-4 py-3 lg:py-10">
          <h1 className="text-6xl lg:text-8xl font-sans uppercase text-center font-bold">
            404 - Page Not Found
          </h1>
          <Link href={ROUTE_HOME} className="uppercase font-bold text-lg">
            Go back to the main page
          </Link>
        </div>
      </div>
    </main>
  );
}
