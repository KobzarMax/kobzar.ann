import { getPhotos } from '@/api';
import Gallery from '@/components/Gallery';

export default async function PortfolioPage() {
  const renderingPhotos = await getPhotos();

  return (
    <main className="bg-white">
      <Gallery photos={renderingPhotos} />
    </main>
  );
}
